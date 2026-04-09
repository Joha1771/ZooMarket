import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useCartStore from "../store/cartStore";

const schema = z.object({
  firstName: z.string().min(2, "Минимум 2 символа"),
  lastName: z.string().min(2, "Минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер"),
  email: z.string().email("Некорректный email").optional().or(z.literal("")),
  city: z.string().min(2, "Укажите город"),
  address: z.string().min(5, "Укажите адрес"),
  delivery: z.enum(["courier", "pickup", "russia"]),
  comment: z.string().optional(),
  agree: z.literal(true, {
    errorMap: () => ({ message: "Необходимо согласие" }),
  }),
});

const inputCls =
  "h-11 px-4 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-orange-400 transition-colors bg-white w-full";

function Field({ label, error, optional, children }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label className="text-xs text-gray-500">{label}</label>
        {optional && (
          <span className="text-xs text-orange-500">необязательное</span>
        )}
      </div>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { delivery: "courier", agree: true },
  });

  const onSubmit = () => {
    clearCart();
    navigate("/success");
  };

  return (
    <div className="max-w-[1170px] px-5 py-6 mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-gray-400">
        <Link to="/" className="no-underline hover:text-orange-500">
          Главная
        </Link>
        <span>›</span>
        <Link to="/cart" className="no-underline hover:text-orange-500">
          Корзина
        </Link>
        <span>›</span>
        <span className="text-gray-600">Оформление заказа</span>
      </div>

      <h1 className="mb-8 text-2xl font-bold text-gray-900">
        Оформление заказа
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left column */}
          <div className="flex flex-col flex-1 gap-6">
            {/* Buyer */}
            <div>
              <h2 className="mb-5 text-base font-bold text-gray-900">
                Покупатель
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Имя" error={errors.firstName?.message}>
                  <input
                    {...register("firstName")}
                    placeholder="Иван"
                    className={inputCls}
                  />
                </Field>
                <Field label="Фамилия" error={errors.lastName?.message}>
                  <input
                    {...register("lastName")}
                    placeholder="Иванов"
                    className={inputCls}
                  />
                </Field>
                <Field label="Телефон" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    placeholder="+7 (000) 000 00 00"
                    className={inputCls}
                  />
                </Field>
                <Field label="E-mail" error={errors.email?.message} optional>
                  <input
                    {...register("email")}
                    placeholder="myname@mail.ru"
                    className={inputCls}
                  />
                </Field>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="mb-5 text-base font-bold text-gray-900">
                Адрес доставки
              </h2>
              <div className="flex flex-col gap-4">
                <Field label="Город" error={errors.city?.message}>
                  <input
                    {...register("city")}
                    placeholder="Ваш город"
                    className={inputCls}
                  />
                </Field>
                <Field label="Адрес" error={errors.address?.message}>
                  <input
                    {...register("address")}
                    placeholder="Улица, дом, подъезд"
                    className={inputCls}
                  />
                </Field>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col w-full gap-6 lg:w-96">
            {/* Delivery */}
            <div>
              <h2 className="mb-4 text-base font-bold text-gray-900">
                Способ доставки
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    value: "courier",
                    label: "Доставка курьером",
                    sub: "по г. Тюмень, от 1500 рублей — бесплатно",
                  },
                  {
                    value: "pickup",
                    label: "Самовывоз",
                    sub: 'ул. В. Гнаровской, 7 (ТЦ Тетрис) — зоомагазин "Сытая Морда"',
                  },
                  {
                    value: "russia",
                    label: "Доставка по РФ",
                    sub: "от 1500 рублей (по предоплате) — 0 р.",
                    hint: true,
                  },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      value={opt.value}
                      {...register("delivery")}
                      className="mt-0.5 cursor-pointer accent-orange-500"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800 transition-colors group-hover:text-orange-500">
                        {opt.label}
                        {opt.hint && (
                          <span
                            className="ml-1 text-xs text-gray-400 cursor-help"
                            title="Подробнее об условиях"
                          >
                            ⓘ
                          </span>
                        )}
                      </p>
                      <p className="text-xs leading-snug text-gray-400">
                        {opt.sub}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="mb-3 text-base font-bold text-gray-900">
                Способ оплаты
              </h2>
              <p className="text-sm text-gray-600">
                Оплата при получении наличными или картой
              </p>
            </div>

            {/* Comment */}
            <div>
              <h2 className="mb-3 text-base font-bold text-gray-900">
                Комментарий к заказу
              </h2>
              <textarea
                {...register("comment")}
                placeholder="Ваш комментарий"
                rows={5}
                className="w-full px-4 py-3 text-sm text-gray-700 transition-colors bg-white border border-gray-200 rounded-lg outline-none resize-none focus:border-orange-400"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 mt-6 border-t border-gray-200 sm:flex-row">
          <p className="text-lg font-bold text-gray-900">
            Сумма заказа: {totalPrice.toLocaleString()} Р
          </p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register("agree")}
                className="w-4 h-4 cursor-pointer accent-orange-500"
              />
              <span className="text-sm text-gray-500">
                Я прочитал и согласен с{" "}
                <Link
                  to="/terms"
                  className="text-orange-500 no-underline hover:underline"
                >
                  Условиями соглашения
                </Link>
              </span>
            </label>
            {errors.agree && (
              <p className="text-xs text-red-500">{errors.agree.message}</p>
            )}
            <button
              type="submit"
              className="h-12 px-8 text-base font-medium text-white transition-all bg-orange-500 border-none rounded-lg cursor-pointer hover:bg-orange-600 active:scale-95 whitespace-nowrap"
            >
              Подтвердить заказ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
