import sum from "../sum";

test("Sum Should be calculate accurately", () => {
  const res = sum(9, 1);
  expect(res).toBe(10);
  //   expect(res).toBe(12);
});
