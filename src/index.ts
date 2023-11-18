let message: string = "Hello World !";
console.log(message);

class Hero {
  private name: string;
  private power: number;
  private life: number;
  weapon: Weapons = new Weapons("ts");

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }

  attack(opponent: Hero): void {
    opponent.setLife(this.power);
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
  setLife(powerOpponent: number): void {
    this.life -= powerOpponent;
  }
}

class Weapons {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new Weapons("axe");
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      opponent.setLife(super.getPower() * 2);
    } else {
      super.attack(opponent);
    }
  }
}

class HeroSword extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new Weapons("Sword");
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSpear) {
      opponent.setLife(super.getPower() * 2);
    } else {
      super.attack(opponent);
    }
  }
}

class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new Weapons("Spear");
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroAxe) {
      opponent.setLife(super.getPower() * 2);
    } else {
      super.attack(opponent);
    }
  }
}

const player: HeroAxe = new HeroAxe("bob", 15, 300);
const player2: HeroSword = new HeroSword("patrick", 30, 300);

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
