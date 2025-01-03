export function sum(a: number, b: number): number {
  return a + b;
}

export function isNotTruth(value?: boolean): boolean | null {
  if (value) {
    return value;
  } else {
    return null;
  }
}

