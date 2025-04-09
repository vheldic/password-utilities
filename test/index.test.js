const { isStrongPassword, generateStrongPassword } = require('../src/index');

test("Check if password is strong", () => {
  expect(isStrongPassword("Short")).toBe(false);
  expect(isStrongPassword("Hello World")).toBe(false);
  expect(isStrongPassword("pC%mD8TpCKn2")).toBe(true);
});

test("Generate a strong password based on length", () => {
  expect(generateStrongPassword(1).length).toBe(8);
  expect(generateStrongPassword(12).length).toBe(12);
  expect(generateStrongPassword().length).toBe(12);
});
