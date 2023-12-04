import { Weapons } from "./Weapons";

class Hero {
  private name: string;
  private power: number;
  private life: number;
  private weapon!: Weapons;

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }

  attack(opponent: Hero, multiplicator = 1): void {
    const totalDamage: number =
      this.power * multiplicator + this.weapon.damageValue;
    opponent.lifeValue = totalDamage;
  }

  isAlive(): boolean {
    return this.life > 0;
  }
  get powerValue() {
    return this.power;
  }
  get nameValue() {
    return this.name;
  }
  set lifeValue(damage: number) {
    this.life -= damage;
  }
  attributeWeapon(weapon: Weapons): void {
    this.weapon = weapon;
  }
}

export { Hero, Weapons };
