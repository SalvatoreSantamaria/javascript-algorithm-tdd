import { expect } from 'chai';
import { anagramsFunction } from './anagrams';

describe('anagramsFunction - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {}
    const actual = anagramsFunction('')
    expect(actual).to.deep.equal(expected)

  })

  it('returns false when two words are not anagrams', () => {
    const expected = true
    const actual = anagramsFunction('hi', 'ih') 
    expect(actual).to.deep.equal(expected)
  })
})
