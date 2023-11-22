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

export { Weapons };
