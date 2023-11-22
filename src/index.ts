let message: string = "Hello World !";
console.log(message);
import { HeroSword } from "./HeroSword";
import { HeroAxe } from "./HeroAxe";

const player: HeroAxe = new HeroAxe("bob", 15, 300);
const player2: HeroSword = new HeroSword("patrick", 15, 300);

while (player2.isAlive() && player.isAlive()) {
  player.attack(player2);
  console.log(player2);
  console.log("");

  player2.attack(player);
  console.log(player);
  console.log("");
}
if (player.isAlive() === false && player2.isAlive()) {
  console.log(`${player2.getName()} est le gagnant`);
} else if (player2.isAlive() === false && player.isAlive()) {
  console.log(`${player.getName()} est le gagnant`);
} else if (player.isAlive() === false && player2.isAlive() === false) {
  console.log("It's a draw.");
}
