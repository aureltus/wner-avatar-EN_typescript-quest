# Briefing

You will have to find the following information and test them as you go along in your program to experiment and understand how TypeScript will help you write your best code!

## Level 1

### Which are the different primitive data types in TypeScript?

- `boolean` : Represents a binary choice, either true or false.

```ts
let isTrue: boolean = false;
```

- `number` : Represents numeric values, including integers and floating-point numbers.

```ts
let age: number = 27;
```

- `string` : Represents textual data

```ts
let name: string = "Bob";
```

- `bigint` : when need to work with very large integers that exceed the limits of the number type.(not yet massively published)

```ts
let valeur: bigint = 9007199254740991n;
```

- `symbol` : symbols are unique and immutable values, often used as object keys.

```ts
let sym1: symbol = Symbol("key");
let sym2: symbol = Symbol("key");

console.log(sym1 === sym2); // false, because symbols are unique
```

- `undefined` : represents a variable that has been declared but has not yet been assigned a value.
- `null` : used to indicate the intentional absence of any object reference.

### How to type an Array?

```ts
// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Array of strings
let names: string[] = ["John", "Jane", "Doe"];

// Array of booleans
let flags: boolean[] = [true, false, true];
```

### What is the `any` type?

The `any` type is useful when you don't want to write a very long typing line just to convince TypeScript that a certain line of code is valid. But never used that !

### How to type the return of a function as well as the type of its parameters?

```ts
function addNumbers(x: number, y: number): number {
  return x + y;
}
```

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 2

### What is a class?

A class serves as a blueprint or template for creating objects.

```ts
class Point {
  x: number;
  y: number;
}
```

### What is a class constructor?

Class constructors are very similar to functions. you can add parameters with type annotations, default values, as well as overloads

```ts
class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

```ts
class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {}
}
```

### What is a class instance?

```ts
const pt = new Point();
pt.x = 0;
pt.y = 0;
```

### How to check that a class is of a certain instance?

This is an individual object created from a class in object-oriented programming

### What is `this` in a class?

In the context of a method of a class, `this` refers to the instance of the current class.

### What is a class method?

Methods are functions defined within the scope of a class. These methods are designed to perform operations related to the class and can access and manipulate the class's properties.

### What is the visibility of properties?

Properties of a class can have different visibility levels, which determine where the properties can be accessed. TypeScript supports three visibility modifiers for class properties.

### What is the difference between `public`, `private` and `protected`?

- `Public` (public): The default visibility if no modifier is specified. Public properties can be accessed from outside the class.
- `Private` (private): Properties marked as private can only be accessed within the class where they are declared. They are not accessible from outside the class or from derived classes.
- `Protected` (protected): Properties marked as protected are accessible within the class and its subclasses (derived classes). They are not accessible from outside the class hierarchy.

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 3

### How to split our program into different files? (e.g. a class in a file that I import into another)

using export/import

### What is the `export` keyword?

this is used to indicate that a variable, function, class, or other declaration should be made available for use in other files or modules.

```ts
export const myVariable: number = 42;
export function add(x: number, y: number): number {
  return x + y;
}
```

### What is the `import` keyword?

Using `import` allows you to group features into separate files, making code easier to manage and allowing for feature reuse.

```ts
import { myVariable } from "./myModule";
export function add(x: number, y: number): number {
  return x + y;
}
```

### What's inheritance?

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class (called the subclass or derived class) to inherit attributes and behaviors from an existing class (called the superclass or base class). Inheritance facilitates code reuse and establishes a relationship between classes, allowing the derived class to leverage the properties and methods of the base class.

```ts
// Base class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

// Derived class inheriting from Animal
class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} is barking.`);
  }
}
```

### How to call the constructor of a parent class?

```ts
// Creating instances
let dog = new Dog("Buddy");
dog.eat(); // Inherited from Animal class
dog.bark(); // Specific to Dog class
```

### How to call a method of a parent class?

We can call a method of a parent class from a subclass using the `super` keyword. The `super` keyword is used to refer to the parent class, and you can use it to call methods defined in the parent class.

```ts
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    // Call the constructor of the parent class using super
    super(name);

    // Initialize the properties specific to the Dog class
    this.breed = breed;
  }
}
```

### What is polymorphism?

Polymorphism allows objects of different types to be treated as objects of a common type. It enables a single interface or method to be used with objects of various classes, providing a level of abstraction and flexibility in code design.

There are two main types of polymorphism: compile-time polymorphism (also known as method overloading) and runtime polymorphism (also known as method overriding). In TypeScript, the most common form of polymorphism is runtime polymorphism through method overriding.

```ts
// Compile-time Polymorphism
class MathOperations {
  add(x: number, y: number): number {
    return x + y;
  }

  add(x: string, y: string): string {
    return x + y;
  }
}

/************************************/

//Runtime Polymorphism
class Animal {
  makeSound(): void {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark! Bark!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}
```

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Boss level

You've learned a lot of things! Now it's time to put it into practice through this exercise in pairs!

### Part 1 : Heroes

Create a `Hero` class that allows you to create objects with the following properties:

```ts
name: string;
power: number;
life: number;
```

And the methods

```ts
  attack(opponent: Hero)
  isAlive()
```

The `attack` method has an `opponent` parameter (of type `Hero`). It is necessary to reduce the number (`life`) of `opponent` by as much damage (`power`) of the attacker.

​*Example: If the Joan instance, attacks the Leon instance, it will be represented by this method call:*

```ts
joan.attack(leon);
```

The `isAlive` method should return `true` if the hero's life points are greater than zero and `false` otherwise.

Create two instances of `Hero` and check that the `attack` and `isAlive` methods work.

**Constraint to add**: you now have to make sure that the `name`, `power`, `life` properties are private. You will have to create methods to access their value and modify their value.

### Part 2 : Weapons

​
Create a `Weapon` class with the following property:

```ts
name: string;
```

Add the `weapon` attribute (of type `Weapon`) to the `Hero` class without modifying the constructor (so `weapon` is not initialized).

Create three classes `HeroAxe`, `HeroSword` and `HeroSpear` that inherit from `Hero`.

These three classes call the constructor of their parent and initialize `weapon` with instances of the `Weapon` class whose names will be `axe`, `sword` or `spear` as the case may be.

In the `HeroAxe`, `HeroSword` and `HeroSpear` classes, redefine the `attack` method to take into account the following cases:

- `HeroAxe` : if the type of `opponent` is `HeroSword`, multiply `power` by two
- `HeroSword` : if the type of `opponent` is `HeroSpear`, multiply `power` by two
- `HeroSpear` : if the type of `opponent` is `HeroAxe`, multiply `power` by two

Tip: use the `super` keyword to call the `attack` method of the parent class.
​
Create instances of the three classes `HeroAxe`, `HeroSword` and `HeroSpear` and check that their `attack` methods work correctly.
​

### Part 3 : Battle

Create a loop that makes two instances of subclasses `Hero` fight each other (they attack at the same time).

When at least one of them is dead, display `{heroName} wins`. If both are dead, display `It's a draw`.

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

---

**_Bonus 1 : Weapon damage_**

_Add a `damage` property to the `Weapon` class and make sure it is initialized by the constructor._

_Edit the `attack` method of `Hero` so that the damage is calculated as follows: the hero's power `power` + the weapon's damage `power`_

**_Bonus 2 : User interface_**

_Create a user interface for the application (for example, with a choice of heroes and weapons, and a visual on the damage inflicted)_

```

```
