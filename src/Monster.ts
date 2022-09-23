import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints = 85;
  private _strength = 63;

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints === 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;