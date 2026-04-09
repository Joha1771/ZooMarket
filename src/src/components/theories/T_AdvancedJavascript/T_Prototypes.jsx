import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_Prototypes() {
  return (
    <div className="flex flex-col gap-0">
      <H>Prototype nima?</H>
      <P>
        JavaScriptda har bir ob'yekt yashirin <Code>[[Prototype]]</Code>{" "}
        xususiyatiga ega. Bu boshqa ob'yektga havola bo'lib, "meros" mexanizmini
        ta'minlaydi. Ob'yektda xususiyat topilmasa, u prototipdan qidiriladi.
      </P>

      <H>Prototype zanjiri</H>
      <Pre>{`const animal = {
  breathe() {
    return "nafas olmoqda";
  }
};

const dog = {
  bark() {
    return "vov-vov!";
  }
};

// dog ning prototipi = animal
Object.setPrototypeOf(dog, animal);

dog.bark();    // "vov-vov!" — o'zida bor
dog.breathe(); // "nafas olmoqda" — prototipdan olindi
dog.toString();// "[object Object]" — Object.prototype dan

// Zanjir: dog → animal → Object.prototype → null`}</Pre>

      <H>Constructor Function (ES5 usuli)</H>
      <Pre>{`function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Metodlar prototipga — har ob'yektda alohida saqlanmaydi (xotira tejash)
Person.prototype.greet = function() {
  return \`Salom, men \${this.name}\`;
};

Person.prototype.getAge = function() {
  return this.age;
};

const ali = new Person("Ali", 25);
const vali = new Person("Vali", 30);

ali.greet();  // "Salom, men Ali"
vali.greet(); // "Salom, men Vali"

// ali va vali bir xil greet funksiyasini ishlatadi
ali.greet === vali.greet; // true — prototipdan`}</Pre>

      <H>new operatori nima qiladi?</H>
      <Table
        headers={["Qadam", "Nima bo'ladi"]}
        rows={[
          ["1", "Bo'sh ob'yekt yaratiladi: {}"],
          ["2", "Ob'yektning [[Prototype]] = Constructor.prototype qilinadi"],
          ["3", "Constructor ichida this = yangi ob'yekt"],
          ["4", "Constructor bajariladi (this ga xususiyatlar qo'shiladi)"],
          ["5", "Yangi ob'yekt qaytariladi"],
        ]}
      />

      <H>Prototip meros (Inheritance)</H>
      <Pre>{`function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return \`\${this.name} ovoz chiqarmoqda\`;
};

// Dog — Animal dan meros oladi
function Dog(name, breed) {
  Animal.call(this, name); // super() o'rnida
  this.breed = breed;
}

// Prototip zanjirini bog'lash
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return "Vov!";
};

const rex = new Dog("Rex", "Labrador");
rex.speak(); // "Rex ovoz chiqarmoqda" — Animal dan
rex.bark();  // "Vov!" — Dog dan`}</Pre>

      <H>Foydali metodlar</H>
      <Pre>{`const obj = { name: "Ali" };

// Prototipni tekshirish
Object.getPrototypeOf(obj); // Object.prototype

// Xususiyat qayerda?
obj.hasOwnProperty("name");   // true — o'zida
obj.hasOwnProperty("toString"); // false — prototipda

// instanceof
rex instanceof Dog;    // true
rex instanceof Animal; // true — zanjir orqali
rex instanceof Object; // true — hamma narsa Object dan`}</Pre>

      <Note type="info">
        ES6 <Code>class</Code> sintaksisi prototip mexanizmining ustiga qurilgan
        "syntactic sugar" — ichida xuddi shunday ishlaydi.
      </Note>
    </div>
  );
}
