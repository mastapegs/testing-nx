import { convertToBits } from './convert-to-bits';

describe('convertToBits', () => {
  it('should correctly convert a string to on bit representation', () => {
    expect(convertToBits("ABC")).toEqual(7);
    expect(convertToBits("ABB")).toEqual(6);
    expect(convertToBits("ABCD")).toEqual(9);
    expect(convertToBits("ABAB")).toEqual(8);
  });
});
