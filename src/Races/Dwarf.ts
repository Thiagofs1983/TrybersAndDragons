import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _counter = 0;

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._counter += 1;
    return this._counter;
  }
}

export default Dwarf;