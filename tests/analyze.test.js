import { analyze } from "../files/analyze";

it("passing non array test", ()=> {
  expect(() => analyze("array")).toThrow("Input must be an array");
});

it("no errors when passing array", ()=> {
  expect(() => analyze([1,2,3])).not.toThrow();
});

it("analyze works", () => {
  expect(analyze([1,8,3,4,2,6])).toEqual({
   average: 4,
   min: 1,
   max: 8,
   length: 6
  });
});