export function convertAsciiToOnBits(ascii: number): number {
  let onCount = 0
  let numberInProgress = ascii
  for (let i = 7; i >= 0; i--) {
    if (numberInProgress / Math.pow(2, i) >= 1) {
      onCount++
      numberInProgress %= Math.pow(2, i)
    }
  }
  return onCount
}

export function convertToBits(input: string): number {
  const asciiArray: number[] = []
  for (let i = 0; i < input.length; i++) {
    asciiArray.push(input.charCodeAt(i))
  }

  const individualOnBits = asciiArray.map(ascii => convertAsciiToOnBits(ascii))

  return individualOnBits.reduce((accu, curr) => accu + curr, 0)
}
