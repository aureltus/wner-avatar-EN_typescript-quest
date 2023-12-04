let message: string = "Hello World !";
console.log(message);
import { HeroSword } from "./HeroSword";
import { HeroAxe } from "./HeroAxe";
import { battle } from "./battle";

const player: HeroAxe = new HeroAxe("bob", 15, 300);
const player2: HeroSword = new HeroSword("patrick", 15, 300);

battle(player, player2);
