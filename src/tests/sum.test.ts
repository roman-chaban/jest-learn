import { sum, isNotTruth } from "./sum";

interface Obj {
  one: number;
  two?: number;
  three?: undefined | string;
}

const shoppingList: Array<string> = ["milk", "orange", "bread"];

test("should be return 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("object assignment", () => {
  const obj: Obj = { one: 1 };
  obj["two"] = 2;
  obj.three = undefined;

  expect(obj).toStrictEqual({ one: 1, two: 2, three: undefined });
});

test("adding positive numbers is not zero", () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 5; j++) {
      expect(i + j).not.toBe(0);
    }
  }
});

test("check on truth or undefined", () => {
  expect(isNotTruth()).toBeNull();
});

test("testing null", () => {
  const empty: null = null;

  expect(empty).toBeNull();
  expect(empty).toBeDefined();
  expect(empty).not.toBeUndefined();
  expect(empty).not.toBeTruthy();
  expect(empty).toBeFalsy();
});

test("two plus two", () => {
  const sum: number = 2 + 2;

  expect(sum).toBeGreaterThan(3);
  expect(sum).toBeGreaterThanOrEqual(3.5);
  expect(sum).toBeLessThan(5);
  expect(sum).toBeLessThanOrEqual(4);
});

test("adding floating point numbers", () => {
  const value: number = 0.1 + 0.2;

  expect(value).toBeCloseTo(0.3);
});

test("there is not I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("find milk in shoppingList", () => {
  expect(shoppingList).toContain("orange");
  expect(new Set(shoppingList)).toContain("milk");
});

