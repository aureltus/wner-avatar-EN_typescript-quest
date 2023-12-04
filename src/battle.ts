import { Hero } from "./Hero";

export function battle(hero1: Hero, hero2: Hero) {
  while (hero2.isAlive() && hero1.isAlive()) {
    hero1.attack(hero2);
    console.log(hero2);
    console.log("");

    hero2.attack(hero1);
    console.log(hero1);
    console.log("");
  }
  if (hero2.isAlive()) {
    console.log(`${hero2.nameValue} est le gagnant`);
  } else if (hero1.isAlive()) {
    console.log(`${hero1.nameValue} est le gagnant`);
  } else {
    console.log("It's a draw.");
  }
}
