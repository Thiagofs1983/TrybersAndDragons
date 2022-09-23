import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _character2: Fighter;
  
  constructor(player: Fighter, character2: Fighter) {
    super(player);
    this._character2 = character2;
  }

  public fight(): number {
    while (this.player.lifePoints > -1
      || this._character2.lifePoints > -1) {
      this.player.attack(this._character2);
      this._character2.attack(this.player);
    }
    return super.fight();
  }
}

export default PVP;