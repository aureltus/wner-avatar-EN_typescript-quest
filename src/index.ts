let message: string = "Hello World !";
console.log(message);

class Hero {
  private name: string;
  private power: number;
  private life: number;
  private weapon: Weapons = new Weapons("none", 0);

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }

  attack(opponent: Hero, multiplicator = 1): void {
    const totalDamage: number =
      this.power * multiplicator + this.weapon.getDamage();
    opponent.setLife(totalDamage);
  }

  isAlive(): boolean {
    return this.life > 0;
  }
  getPower() {
    return this.power;
  }
  getName() {
    return this.name;
  }
  setLife(damage: number): void {
    this.life -= damage;
  }
  attributeWeapon(weapon: Weapons): void {
    this.weapon = weapon;
  }
}

class Weapons {
  private name: string;
  private damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
  getDamage(): number {
    return this.damage;
  }
}

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
