import { convertStringToBits, convertAsciiToOnBits } from './convert-to-bits';

describe('convertToBits', () => {
  it('should correctly convert an ascii code to on bit representation', () => {
    expect(convertAsciiToOnBits(65)).toEqual(2)
    expect(convertAsciiToOnBits(66)).toEqual(2)
    expect(convertAsciiToOnBits(67)).toEqual(3)
  })

  it('should correctly convert a string to on bit representation', () => {
    expect(convertStringToBits("ABC")).toEqual(7);
    expect(convertStringToBits("ABB")).toEqual(6);
    expect(convertStringToBits("ABCD")).toEqual(9);
    expect(convertStringToBits("ABAB")).toEqual(8);
    expect(convertStringToBits("Matthew Pagan")).toEqual(47);
    expect(convertStringToBits("Thomas Anderson")).toEqual(60);
  });
});
