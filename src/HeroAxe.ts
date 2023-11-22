import { Hero, Weapons, HeroSword } from "./Hero";

class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    super.attributeWeapon(new Weapons("axe", 5));
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      super.attack(opponent, 2);
    } else {
      super.attack(opponent);
    }
  }
}

export { HeroAxe };
