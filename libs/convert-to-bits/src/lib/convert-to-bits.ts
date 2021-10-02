export function convertCharToBinaryString(char: string): string {
  if (char.length > 1) {
    throw new Error(`char must be 1 in length: ${char.length} was provided`)
  }

  let ascii = char.charCodeAt(0) 
  let convertedString = ''

  for (let i = 7; i >= 0; i--) {
    if (ascii / Math.pow(2, i) >= 1) {
      convertedString += '1'
      ascii %= Math.pow(2, i)
    } else {
      convertedString += '0'
    }
  }

  return convertedString
}

export function convertAsciiStringToBinaryString(string: string): string {
  return string
    .split("")
    .map((char) => convertCharToBinaryString(char))
    .join(" ")
}

export function convertAsciiToOnBits(ascii: number): number {
  let onCount = 0;
  let numberInProgress = ascii;
  for (let i = 7; i >= 0; i--) {
    if (numberInProgress / Math.pow(2, i) >= 1) {
      onCount++;
      numberInProgress %= Math.pow(2, i);
    }
  }
  return onCount;
}

export function convertStringToBits(input: string): number {
  const asciiArray: number[] = [];
  for (let i = 0; i < input.length; i++) {
    asciiArray.push(input.charCodeAt(i));
  }

  return asciiArray
    .map((ascii) => convertAsciiToOnBits(ascii))
    .reduce((accu, curr) => accu + curr, 0);
}
