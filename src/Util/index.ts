import { Endpoint } from "./Endpoint";
import { convertTo } from "./convertTo";
import { convertFrom } from "./convertFrom";
import { NumberType } from "../type/NumberType";
import { secondsToDhms } from "./secondsToDhms";

export const Util = {
  convertTo,
  convertFrom,
  tDigit: (value: number, precision = 2) => {
    return convertTo(value, precision, NumberType.Normal);
  },
  percent: (value: number, precision = 2) => {
    return convertTo(value, precision, NumberType.Percent);
  },
  meter: (value: number, precision = 2) => {
    return convertTo(value, precision, NumberType.Meter);
  },
  secondsToDhms,
  getBaseLog: (x, y) => {
    return Math.log(x) / Math.log(y);
  },
  Endpoint,
};