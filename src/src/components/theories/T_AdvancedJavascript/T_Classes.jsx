import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_Classes() {
  return (
    <div className="flex flex-col gap-0">
      <H>ES6 Class sintaksisi</H>
      <P>
        <Code>class</Code> — prototip asosidagi merosxo'rlikni osonroq yozish
        uchun ES6 da kelgan sintaktik qand (syntactic sugar). Ichkarida xuddi
        prototip kabi ishlaydi.
      </P>

      <Pre>{`class Person {
  // Constructor — yangi ob'yekt yaratilganda chaqiriladi
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method — har ob'yekt uchun
  greet() {
    return \`Salom, men \${this.name}, \${this.age} yoshdaman\`;
  }

  // Getter
  get info() {
    return \`\${this.name} (\${this.age})\`;
  }

  // Setter
  set info(val) {
    [this.name] = val.split(" ");
  }

  // Static method — faqat klassning o'zida, ob'yektda yo'q
  static create(name, age) {
    return new Person(name, age);
  }
}

const ali = new Person("Ali", 25);
ali.greet();      // "Salom, men Ali, 25 yoshdaman"
ali.info;         // "Ali (25)"
Person.create("Vali", 30); // yangi Person ob'yekt`}</Pre>

      <H>Meros (Inheritance) — extends va super</H>
      <Pre>{`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} ovoz chiqarmoqda\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);        // Animal.constructor ni chaqirish — MAJBURIY
    this.breed = breed;
  }

  speak() {
    return \`\${super.speak()} — Vov!\`; // ota metodini chaqirish
  }

  fetch() {
    return \`\${this.name} narsani olib keldi\`;
  }
}

const rex = new Dog("Rex", "Labrador");
rex.speak();  // "Rex ovoz chiqarmoqda — Vov!"
rex.fetch();  // "Rex narsani olib keldi"
rex instanceof Dog;    // true
rex instanceof Animal; // true`}</Pre>

      <H>Private fields (ES2022)</H>
      <Pre>{`class BankAccount {
  #balance;          // private field — # bilan
  #owner;

  constructor(owner, initialBalance) {
    this.#owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Mablag' yetarli emas");
    }
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance; // getter orqali o'qish mumkin
  }
}

const acc = new BankAccount("Ali", 1000);
acc.deposit(500);
acc.balance;    // 1500
acc.#balance;   // SyntaxError — tashqaridan kirish mumkin emas!`}</Pre>

      <H>Static vs Instance</H>
      <Table
        headers={["Tur", "Qayerda", "Chaqirish", "Misol"]}
        rows={[
          ["Instance method", "Ob'yektda", "obj.method()", "ali.greet()"],
          ["Static method", "Klassda", "Class.method()", "Person.create()"],
          ["Instance field", "Ob'yektda", "this.field", "this.name"],
          ["Static field", "Klassda", "Class.field", "Person.count"],
        ]}
      />
      <Note type="tip">
        <Code>extends</Code> bilan meros olganda konstruktorda{" "}
        <Code>super()</Code> ni <strong>birinchi qator</strong> da chaqirish
        shart — aks holda ReferenceError chiqadi.
      </Note>
    </div>
  );
}
