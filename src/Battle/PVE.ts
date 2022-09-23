import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _monsters: Fighter[] | SimpleFighter[];

  constructor(player: Fighter, monsters: Fighter[] | SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  public fight(): number {
    this._monsters.forEach((monster) => {
      while (this.player.lifePoints > -1
        && monster.lifePoints > -1) {
        this.player.attack(monster);
        monster.attack(this.player);
      }
    });
    return super.fight();
  }
}

export default PVE;