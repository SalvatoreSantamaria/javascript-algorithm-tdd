import { expect } from 'chai'
import { getLetterCount } from './letter-count';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected) //use deep because we are comparing objects
  })

  it('returns the correct letter count when passed in a string with no duplicate letters', () => {
    const expected = { c: 1, a: 1, t: 1};
    const actual = getLetterCount('cat')
    expect(actual).to.deep.equal(expected)
  })

  it('returns the correct letter count when passed in a string with multiple letters', () => {
    const expected = { l: 1, e: 2, t: 2, r: 1, s: 1};
    const actual = getLetterCount('letters')
    expect(actual).to.deep.equal(expected)
  })

})