export function getRandomIndex(menuLength: number, currentIndex: number): number {
  const index = Math.floor(Math.random() * menuLength)
  if (currentIndex === index) {
    return getRandomIndex(menuLength, currentIndex)
  }
  return index
}
