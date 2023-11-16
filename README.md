# Briefing

You will have to find the following information and test them as you go along in your program to experiment and understand how TypeScript will help you write your best code!

## Level 1

### Which are the different primitive data types in TypeScript?

-boolean : Represents a binary choice, either true or false.

```
let isTrue :boolean = false
```

-number : Represents numeric values, including integers and floating-point numbers.

```
let age: number = 27
```

-string : Represents textual data

```
let name: string = "Bob"
```

-bigint : when need to work with very large integers that exceed the limits of the number type.(not yet massively published)

```
let valeur: bigint = 9007199254740991n;
```

-symbol : symbols are unique and immutable values, often used as object keys.

```
let sym1: symbol = Symbol('key');
let sym2: symbol = Symbol('key');

console.log(sym1 === sym2);  // false, because symbols are unique
```

-undefined : represents a variable that has been declared but has not yet been assigned a value.
-null : used to indicate the intentional absence of any object reference.

### How to type an Array?

```
// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Array of strings
let names: string[] = ["John", "Jane", "Doe"];

// Array of booleans
let flags: boolean[] = [true, false, true];
```

### What is the `any` type?

The any type is useful when you don't want to write a very long typing line just to convince TypeScript that a certain line of code is valid.

### How to type the return of a function as well as the type of its parameters?

```
function addNumbers(x: number, y: number): number {
    return x + y;
}
```

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 2

- What is a class?
- What is a class constructor?
- What is a class instance?
- How to check that a class is of a certain instance?
- What is `this` in a class?
- What is a class method?
- What is the visibility of properties?
- What is the difference between `public`, `private` and `protected`?

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 3

- How to split our program into different files? (e.g. a class in a file that I import into another)
- What is the `export` keyword?
- What is the `import` keyword?
- What's inheritance?
- How to call the constructor of a parent class?
- How to call a method of a parent class?
- What is polymorphism?

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
