class Weapons {
  private name: string;
  private damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
  get damageValue(): number {
    return this.damage;
  }
}

export { Weapons };
