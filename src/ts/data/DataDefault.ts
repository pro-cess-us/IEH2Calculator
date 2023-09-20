import { SourceKind } from "../type/SourceKind";

export class DataDefault implements SourceKind {
  monsterPetLevels: number[];
  monsterPetRanks: number[];
  monsterPetLoyalty: number[];
  potionDisassembledNums: number[];
  expeditionLevels: number[];
  expeditionPetIsSet?: boolean[];
  expeditionPetSpecies?: number[];
  expeditionPetColors?: number[];
  isClearedMission?: boolean[];
  nitroSpeed?: number;
  upgradeLevelsSlimebank?: number[];
  upgradeLevelsBasicStats?: number[];
  upgradeLevelsEquipmentInventory?: number;
  upgradeLevelsExpGain?: number;
  upgradeLevelsGoldCap?: number[];
  upgradeLevelsGoldGain?: number;
  upgradeLevelsResource?: number[];
  ascensionMilestoneLevelReached?: number[];
  buildingLevels?: number[];
  buildingResearchLevelsStone?: number[];
  buildingResearchLevelsCrystal?: number[];
  buildingResearchLevelsLeaf?: number[];
  equipmentId?: number[];
  equipmentKinds?: number[];
  equipment1stForgeValues?: number[];
  equipment2ndForgeValues?: number[];
  equipment3rdForgeValues?: number[];
  equipment4thForgeValues?: number[];
  equipment5thForgeValues?: number[];
  equipment6thForgeValues?: number[];
  equipment1stOptionEffectKinds?: number[];
  equipment2ndOptionEffectKinds: number[];
  equipment3rdOptionEffectKinds?: number[];
  equipment4thOptionEffectKinds?: number[];
  equipment5thOptionEffectKinds?: number[];
  equipment6thOptionEffectKinds?: number[];
  equipment7thOptionEffectKinds?: number[];
  equipmentLevelsWarrior?: number[];
  equipmentLevelsWizard?: number[];
  equipmentLevelsAngel?: number[];
  equipmentLevelsThief?: number[];
  equipmentLevelsArcher?: number[];
  equipmentLevelsTamer?: number[];

  constructor() {
    this.monsterPetLevels = Array(130).fill(0);
    this.monsterPetRanks = Array(130).fill(0);
    this.monsterPetLoyalty = Array(130).fill(0);
    this.potionDisassembledNums = Array(70).fill(0);
    this.expeditionLevels = Array(7).fill(0);
    this.expeditionPetIsSet = Array(50).fill(false);
    this.expeditionPetSpecies = Array(50).fill(0);
    this.expeditionPetColors = Array(50).fill(0);
    this.isClearedMission = Array(10000).fill(0);
    this.nitroSpeed = 1;
    this.upgradeLevelsGoldGain = 0;
    this.upgradeLevelsExpGain = 0;
    this.upgradeLevelsEquipmentInventory = 0;
    this.upgradeLevelsResource = Array(3).fill(0);
    this.upgradeLevelsBasicStats = Array(7).fill(0);
    this.upgradeLevelsSlimebank = Array(22).fill(0);
    this.upgradeLevelsGoldCap = Array(3).fill(0);
    this.ascensionMilestoneLevelReached = Array(8).fill(0);
    this.buildingLevels = Array(12).fill(0);
    this.buildingResearchLevelsStone = Array(12).fill(0);
    this.buildingResearchLevelsCrystal = Array(12).fill(0);
    this.buildingResearchLevelsLeaf = Array(12).fill(0);
    this.equipmentId = Array(6000).fill(0);
    this.equipmentKinds = Array(6000).fill(0);
    this.equipment1stForgeValues = Array(5300).fill(0);
    this.equipment2ndForgeValues = Array(5300).fill(0);
    this.equipment3rdForgeValues = Array(5300).fill(0);
    this.equipment4thForgeValues = Array(5300).fill(0);
    this.equipment5thForgeValues = Array(5300).fill(0);
    this.equipment6thForgeValues = Array(5300).fill(0);
    this.equipment1stOptionEffectKinds = Array(6000).fill(0);
    this.equipment2ndOptionEffectKinds = Array(6000).fill(0);
    this.equipment3rdOptionEffectKinds = Array(6000).fill(0);
    this.equipment4thOptionEffectKinds = Array(6000).fill(0);
    this.equipment5thOptionEffectKinds = Array(6000).fill(0);
    this.equipment6thOptionEffectKinds = Array(6000).fill(0);
    this.equipment7thOptionEffectKinds = Array(6000).fill(0);
    this.equipmentLevelsWarrior = Array(163).fill(0);
    this.equipmentLevelsWizard = Array(163).fill(0);
    this.equipmentLevelsAngel = Array(163).fill(0);
    this.equipmentLevelsThief = Array(163).fill(0);
    this.equipmentLevelsArcher = Array(163).fill(0);
    this.equipmentLevelsTamer = Array(163).fill(0);
  }
}