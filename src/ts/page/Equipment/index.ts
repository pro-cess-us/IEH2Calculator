import { App } from "../../App";
import { Page } from "../Page";
import { EquipmentSet } from "../../data/Equipment/EquipmentSet";
import { HeroKind } from "../../type/HeroKind";
import { EquipmentPart } from "../../type/EquipmentPart";
import { Util } from "../../Util";
import { Enums } from "../../Enums";

export class Equipment {
  custom = {
    hero: 0,
  };
  set;

  constructor() {
    // this.set.Custom = new EquipmentSet("Custom");
    // this.custom.hero = parseInt(this.custom.hero);
    // console.log(Util.render.Select("Armor"));
    // console.log(this);
    // this.custom = { test: "hello" };
    // console.log(this.custom);

    // console.log(typeof this.custom.hero === "string");
    if (typeof this.custom.hero === "string") this.custom.hero = parseInt(this.custom.hero);
    this.set = globalThis.data.inventory.getLoadout(this.custom.hero);

    // this.set.Weapon[6].SetAgainAllEffect();
    // this.set.Weapon[7].SetAgainAllEffect();

    // console.log(this);
  }

  // SetAgainAllEffect() {
  //   this.set.Weapon.forEach((weapon) => {
  //     weapon.SetAgainAllEffect();
  //   });
  // }

  Initialization() {
    const offset = 4840 + this.custom.hero * 72;

    // globalThis.data.inventory.equipmentSlots[offset].SetAgainAllEffect();
    // console.log(offset, globalThis.data.inventory.equipmentSlots[offset].IsEquipped(this.custom.hero));
    // console.log(offset + 4, globalThis.data.inventory.equipmentSlots[offset + 4].IsEquipped(this.custom.hero));

    // globalThis.data.inventory.equipmentSlots[offset + 1].SetAgainAllEffect();
    // globalThis.data.inventory.equipmentSlots[offset + 2].SetAgainAllEffect();
    // globalThis.data.inventory.equipmentSlots[offset + 3].SetAgainAllEffect();
    // globalThis.data.inventory.equipmentSlots[offset + 24].SetAgainAllEffect();
    // globalThis.data.inventory.equipmentSlots[offset + 24 + 1].SetAgainAllEffect();
    // globalThis.data.inventory.equipmentSlots[offset + 24 + 2].SetAgainAllEffect();
    // globalThis.data.inventory.equipmentSlots[offset + 24 + 3].SetAgainAllEffect();
    // globalThis.data.inventory.equipmentSlots[offset + 48].SetAgainAllEffect();
    // globalThis.data.inventory.equipmentSlots[offset + 48 + 1].SetAgainAllEffect();
    // globalThis.data.inventory.equipmentSlots[offset + 48 + 2].SetAgainAllEffect();
    // globalThis.data.inventory.equipmentSlots[offset + 48 + 3].SetAgainAllEffect();
  }

  isDisabled(part: EquipmentPart, value) {
    if (globalThis.data.custom.isSuperDungeon == false) {
      switch (part) {
        case EquipmentPart.Weapon:
          return globalThis.data.inventory.equipWeaponUnlockedNum[this.custom.hero].Value() <= value;
        case EquipmentPart.Armor:
          return globalThis.data.inventory.equipArmorUnlockedNum[this.custom.hero].Value() <= value;
        case EquipmentPart.Jewelry:
          return globalThis.data.inventory.equipJewelryUnlockedNum[this.custom.hero].Value() <= value;
        default:
          return false;
      }
    } else {
      switch (part) {
        case EquipmentPart.Weapon:
          return globalThis.data.battles[this.custom.hero].superDungeonCtrl.eqWeaponSlotNum.value <= value;
        case EquipmentPart.Armor:
          return globalThis.data.battles[this.custom.hero].superDungeonCtrl.eqArmorSlotNum.value <= value;
        case EquipmentPart.Jewelry:
          return globalThis.data.battles[this.custom.hero].superDungeonCtrl.eqJewelrySlotNum.value <= value;
        default:
          return false;
      }
    }
  }

  get html() {
    let html = ``;
    // console.log(this.custom.hero);
    // console.log(globalThis.data.inventory.equipmentSlots[4840 + ]);

    // if (typeof this.custom.hero === "string") this.custom.hero = parseInt(this.custom.hero);
    // this.set = globalThis.data.inventory.getLoadout(this.custom.hero);
    // this.SetAgainAllEffect();
    // this.set.Weapon[0].SetAgainAllEffect();

    // html += `Floor Reward: <user-input data-endpoint="data.sdg.shopCtrl.itemList[1].purchasedNum"></user-input><br>`;

    html += `<custom-select data-type="HeroKind" data-endpoint="page['equipment'].logic.custom.hero">${this.custom.hero}</custom-select>`;
    html += globalThis.data.custom.isSuperDungeon
      ? `Grade: ${globalThis.data.superStats.heroes[this.custom.hero].grade}`
      : `Level: ${globalThis.data.stats.heroes[this.custom.hero].level}`;
    // html += `<custom-checkbox data-endpoint="page['equipment'].logic.custom.isSuperDungeon">Super Dungeon</custom-checkbox>`;
    html += `<custom-checkbox data-endpoint="data.custom.isSuperDungeon">Super Dungeon</custom-checkbox>`;
    html += "<div>";
    // weapons
    for (let i = 0; i < Enums.EquipmentPart; i++) {
      const part = EquipmentPart[i];

      html += `<table class="equipment"><tbody>`;
      for (let index = 0; index < 24; index++) {
        let isDisabled = this.isDisabled(i, index) ? 'data-disabled="true"' : "";
        const offset = 4840 + this.custom.hero * 72 + index + i * 24;

        if (!this.isDisabled(i, index)) {
          globalThis.data.inventory.equipmentSlots[offset].SetAgainAllEffect();
        } else {
          globalThis.data.inventory.equipmentSlots[offset].IsEffectRegisteredClear();
        }
        // if (index == 1) isDisabled = 'class="TEST';

        if (index % 8 == 0) html += `<tr style="height: 8px;"></tr>`;
        if (index % 4 == 0) html += `<tr>`;
        html += `<td><equipment-info data-endpoint="data.inventory.equipmentSlots[${offset}]"  data-slot="${part}" ${isDisabled}></equipment-info></td>`;
        if (index % 4 == 3) html += "</tr>";
      }
      html += "</tbody></table>";
    }

    // Utility
    html += `<table class="equipment"><tbody>`;
    for (let index = 0; index < 6; index++) {
      if (index % 2 == 0) html += `<tr style="height: 8px;"></tr>`;
      html += `<tr><td><equipment-info data-endpoint="data.inventory.potionSlots[${
        260 + 6 * this.custom.hero + index
      }]" data-slot="Utility"></equipment-info>`;
    }

    html += `</td></tr>`;

    html += "</tbody></table>";
    html += `</div>`;
    // console.log(globalThis.data.battles[this.custom.hero].superDungeonCtrl.damageMultiplier);
    // html += `<sd-simulator data-hero="${this.custom.hero}"></sd-simulator>`;
    html += `<hero-stat data-hero="${this.custom.hero}" data-superdungeon="${globalThis.data.custom.isSuperDungeon}"></hero-stat>`;
    // html += `<div data-endpoint="page.${this.url.slice(1)}.set.Custom.html"></div>`;
    // html += `<button onclick="globalThis.app.page.${this.url.slice(1)}.Save()">Save</button>`;

    return html;
  }
}
