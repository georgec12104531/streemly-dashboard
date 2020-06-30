const { uniqueId } = require("./utility");

test("generates unique id counter", () => {
  expect(uniqueId("_")).toBe("_1");
  expect(uniqueId("_")).toBe("_2");
  expect(uniqueId("_")).toBe("_3");

  // account for null case 
});
