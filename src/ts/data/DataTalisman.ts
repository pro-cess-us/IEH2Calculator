import { potionKind } from "../type/PotionKind";

export class DataTalisman {
  Nothing;
  #passiveEffectValue = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.0001,
    0.01,
    0.001,
    0.001,
    0.0001,
    0.001,
    0.025,
    null,
    null,
    null,
    null,
    0.01,
    0.01,
    0.01,
    1.0,
    0.1,
    0.1,
    0.1,
    0.1,
    0.5,
    0.025,
    0.025,
    0.025,
    0.1,
    null,
    0.0001,
    0.0001,
    0.0001,
    0.0001,
    0.0001,
    0.0001,
    0.0001,
    0.0001,
    0.0005,
    0.01,
    null,
    null,
    null,
  ];
  #passiveEffectMaxValue = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.99,
    null,
    2.0,
    5.0,
    1.0,
    1.0,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.9999,
    0.9999,
    0.9999,
    0.9999,
    0.9999,
    0.9999,
    null,
    null,
    1.0,
    null,
    null,
    null,
    null,
  ];
  constructor(data) {
    const passiveEffectValue = this.#passiveEffectValue;
    const passiveEffectMaxValue = this.#passiveEffectMaxValue;
    const disassembled = data.source.potionDisassembledNums;
    for (let index = 32; index < potionKind.length; index++) {
      const talisman = potionKind[index];

      this[talisman] = {
        get disassembled() {
          return data.source.potionDisassembledNums[index];
        },
        set disassembled(value) {
          data.source.potionDisassembledNums[index] = value;
        },
        get effect() {
          // console.log(disassembled[index]);
          // return 1;
          if (passiveEffectMaxValue[index]) {
            return Math.min(passiveEffectMaxValue[index], disassembled[index] * passiveEffectValue[index]);
          } else {
            return 1 + disassembled[index] * passiveEffectValue[index];
          }
        },
        // disassembled: disassembled[index],
        // passiveEffectValue: passiveEffectValue,
      };
    }
  }

  html() {
    let html = "";
    html += `
    <h2>Talisman Data</h2>
    <table>  
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Disassembled</th>
        <th scope="col">Effect</th>
      </tr>
    </thead>`;
    for (let index = 32; index < potionKind.length; index++) {
      const talisman = potionKind[index];
      html += `<tr>`;
      html += `<td>${talisman}</td>`;
      html += `<td><input type='text' data-endpoint='talisman.${talisman}.disassembled'></td>`;
      html += `<td data-endpoint='talisman.${talisman}.effect' data-precision='2'></td>`;
      html += `</tr>`;
    }

    html += "</table>";

    return html;
  }
}