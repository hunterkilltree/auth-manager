export function insertIf<T>(flag: boolean, array: T[], item: T): T[] {
  // If flag is true, return a new array with the item added; otherwise, return the original array.
  return flag ? [...array, item] : array;
}
