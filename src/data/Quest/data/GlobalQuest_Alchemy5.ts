import { MultiplierInfo } from "../../../Multiplier";
import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindGlobal } from "../../../type/QuestKindGlobal";
import { GlobalQuestType } from "../../../type/GlobalQuestType";
import { QuestKind } from "../../../type/QuestKind";


export class GlobalQuest_Alchemy5 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Global;
    this.globalQuestType = GlobalQuestType.Alchemy;
    this.kindGlobal = QuestKindGlobal.Alchemy5;
    }

  StartQuest() {
    
    
    
    globalThis.data.alchemy.catalyst.catalystCostReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Quest, MultiplierType.Add, (() => 0.25), (() => this.isCleared)));
  }
}