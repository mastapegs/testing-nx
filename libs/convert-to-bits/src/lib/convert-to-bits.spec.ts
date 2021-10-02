import { convertStringToBits, convertAsciiToOnBits, convertCharToBinaryString, convertAsciiStringToBinaryString } from './convert-to-bits';

describe('convertToBits', () => {
  it('should convert character to binary string', () => {
    const testString = 'ABC'
    const templateExpectation = `char must be 1 in length: ${testString.length} was provided`
    expect(() => convertCharToBinaryString(testString)).toThrow(templateExpectation)
    
    expect(convertCharToBinaryString('A')).toEqual('01000001')
    expect(convertCharToBinaryString('B')).toEqual('01000010')
    expect(convertCharToBinaryString('C')).toEqual('01000011')
  })

  it('should convert ascii string to binary string', () => {
    expect(convertAsciiStringToBinaryString('ABC')).toEqual('01000001 01000010 01000011')
  })
  
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
