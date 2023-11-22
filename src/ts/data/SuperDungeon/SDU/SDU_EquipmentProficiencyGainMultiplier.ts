import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonUpgrade  } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { Stats } from "../../../type/Stats";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";


export class SDU_EquipmentProficiencyGainMultiplier extends SuperDungeonUpgrade {
  get kind() {return SuperDungeonUpgradeKind.EquipmentProficiencyGainMul;}

  
  Cost(level) {return (2500 + 2500 * level) * Math.pow(2.0, level / 15.0);}

  SetEffect() {return globalThis.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));}

  get maxLevel() {return 1000;}

  get initEffectValue() {return 0.0;}

  get incrementEffectValuePerLevel() {return 0.025;}

}
