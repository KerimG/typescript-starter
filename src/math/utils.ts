export function sum(numbers: Array<number>): number {
  let sum: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;
  }

  return sum;
}

export function add(x: number, y: number): number {
  return sum([x, y]);
}