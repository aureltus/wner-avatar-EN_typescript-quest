import { Hero, Weapons } from "./Hero";
import { HeroSpear } from "./HeroSpear";

class HeroSword extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.attributeWeapon(new Weapons("Sword", 5));
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSpear) {
      super.attack(opponent, 2);
    } else {
      super.attack(opponent);
    }
  }
}

export { HeroSword };
