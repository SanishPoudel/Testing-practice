import { calculator } from "../files/calculator";

it("add works", ()=> {
  expect(calculator.add(1,1)).toBe(2);
});

it("sub works", ()=> {
  expect(calculator.sub(2,1)).toBe(1);
})

it("multiply works", ()=> {
  expect(calculator.multiply(2,3)).toBe(6);
});

it("divide works", ()=> {
  expect(calculator.divide(6,3)).toBe(2);
});