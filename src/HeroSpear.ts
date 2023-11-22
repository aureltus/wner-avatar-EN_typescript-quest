import { Hero, Weapons } from "./Hero";
import { HeroAxe } from "./HeroAxe";
class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.attributeWeapon(new Weapons("Spear", 5));
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroAxe) {
      super.attack(opponent, 2);
    } else {
      super.attack(opponent);
    }
  }
}

export { HeroSpear };
