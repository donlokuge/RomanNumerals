import numberToRoman from "../../util/numberToRoman";
import { assert } from "chai";
import RomanNumbers from "./RomanNumbers.json";


describe("Test number to roman convertion", () => {
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < RomanNumbers.length; i++) {
    // tslint:disable-next-line: variable-name
    const {number, result} = RomanNumbers[i];

    it(`${number} should return ${result}`, () => {
      assert.equal(result, numberToRoman(number));
    });
  }
});
