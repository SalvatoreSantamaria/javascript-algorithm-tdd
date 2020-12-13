import { expect } from 'chai'
import { RomanNumerals } from './romanNumerals';

describe("RomanNumerals", function() {
  it("converts numbers to Roman numerals", function() {
    let RomanNumerals = require("../src/romanNumerals");
    expect(RomanNumerals.fromNumber(1)).toBe("I");
  })
})