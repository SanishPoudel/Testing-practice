import { caesarCipher } from "../files/caesarCipher";

it("text wrapping works", ()=> {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

it("case preservation works", ()=> {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

it("punctuation remains same", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});