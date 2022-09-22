import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _count = 0;

  public static createdArchetypeInstances(): number {
    this._count += 1;
    return this._count;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;