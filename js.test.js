import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./js";

test('calling capitalize with "foo" will return "Foo"', () => {
  expect(capitalize("foo")).toBe("Foo");
});

test('calling reverseString with "abc" will return "cba"', () => {
  expect(reverseString("abc")).toBe("cba");
});

describe("calling the calculator", () => {
  test("add function with 1 and 2 returns 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("subtract function with 2 and 1 returns 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });
  test("divide function with 4 and 2 returns 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test("multiply function with 2 and 3 returns 6", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
});

describe("calling caesarCipher", () => {
  test("with 'a' returns 'n'", () => {
    expect(caesarCipher("a")).toBe("n");
  });
  test("with 'A' returns 'N'", () => {
    expect(caesarCipher("A")).toBe("N");
  });
  test("with 'A' returns 'N'", () => {
    expect(caesarCipher("A")).toBe("N");
  });
  test("with 'A-a' returns 'N-n'", () => {
    expect(caesarCipher("A-a")).toBe("N-n");
  });
  test("with 'xyx' returns 'klm'", () => {
    expect(caesarCipher("xyz")).toBe("klm");
  });
});

describe("calling analyzeArray on [1,8,3,4,2,6] return an object containing", () => {
  test("an average property of 4", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
  });
  test("a min property of 1", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
  });
  test("a max property of 8", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
  });
  test("a length property of 6", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
  });
});
