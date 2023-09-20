export const monsterSpecies = [
  "Slime",
  "MagicSlime",
  "Spider",
  "Bat",
  "Fairy",
  "Fox",
  "DevilFish",
  "Treant",
  "FlameTiger",
  "Unicorn",
  "Mimic",
  "ChallengeBoss",
] as const;

export const monsterColor = ["Normal", "Blue", "Yellow", "Red", "Green", "Purple", "Boss", "Metal"] as const;

export type MonsterKind = {
  [keys in (typeof monsterSpecies)[number]]?: MonsterColor;
};

export type MonsterColor = {
  [keys in (typeof monsterColor)[number]]: Monster;
};

type Monster = {
  expeditionList: number | null[];
  id: number;
  level: number;
  rank: number;
  loyalty: number;
  effect: number;
  effectKind: (typeof petPassiveEffectKind)[number];
  team: number;
};

export const petPassiveEffectKind = [
  "Nothing",
  "ResourceGain",
  "PotionEffect",
  "TamingPointGain",
  "GoldCap",
  "GoldGain",
  "ExpGain",
  "DoubleMaterialChance",
  "GoldGainOnDisassemblePotion",
  "DisassembleTownMatGain",
  "TownMatGainFromDungeonReward",
  "OilOfSlimeDropChance",
  "EnchantedClothDropChance",
  "SpiderSilkDropChance",
  "BatWingDropChance",
  "FairyDustDropChance",
  "FoxTailDropChance",
  "FishScalesDropChance",
  "CarvedBranchDropChance",
  "ThickFurDropChance",
  "UnicornHornDropChance",
  "EquipProfGain",
  "MysteriousWaterGain",
  "ChestPortalOrbChance",
  "SkillProfGain",
  "TownMatGain",
  "ResearchPowerStone",
  "ResearchPowerCrystal",
  "ResearchPowerLeaf",
  "CatalystCriticalChance",
  "MysteriousWaterCap",
  "BlessingEffect",
  "LoyaltyPointGain",
  "PetExpGain",
  "ExpeditionExpGain",
  "EssenceConversionRate",
  "SlimeCoinEfficiency",
  "SlimeCoinCap",
  "EquipmentEffect",
  "AlchemyPointGain",
] as const;

export const petPassiveEffect = [
  "ResourceGain",
  "DoubleMaterialChance",
  "OilOfSlimeDropChance",
  "EquipProfGain",
  "TownMatGain",
  "GoldGain",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "PotionEffect",
  "GoldGainOnDisassemblePotion",
  "EnchantedClothDropChance",
  "MysteriousWaterGain",
  "ResearchPowerStone",
  "ResearchPowerLeaf",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "TamingPointGain",
  "TamingPointGain",
  "SpiderSilkDropChance",
  "TamingPointGain",
  "TamingPointGain",
  "TamingPointGain",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "GoldCap",
  "DisassembleTownMatGain",
  "BatWingDropChance",
  "DisassembleTownMatGain",
  "ResearchPowerCrystal",
  "ResearchPowerCrystal",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "ExpGain",
  "TownMatGainFromDungeonReward",
  "FairyDustDropChance",
  "ChestPortalOrbChance",
  "TamingPointGain",
  "TamingPointGain",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "GoldGain",
  "DisassembleTownMatGain",
  "FoxTailDropChance",
  "SkillProfGain",
  "ResearchPowerLeaf",
  "ResearchPowerStone",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "CatalystCriticalChance",
  "MysteriousWaterCap",
  "FishScalesDropChance",
  "PotionEffect",
  "BlessingEffect",
  "LoyaltyPointGain",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "ResourceGain",
  "PetExpGain",
  "CarvedBranchDropChance",
  "SkillProfGain",
  "LoyaltyPointGain",
  "ExpeditionExpGain",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "EssenceConversionRate",
  "SlimeCoinEfficiency",
  "ThickFurDropChance",
  "SlimeCoinCap",
  "EquipmentEffect",
  "AlchemyPointGain",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "UnicornHornDropChance",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
  "Nothing",
] as const;
