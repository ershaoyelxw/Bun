import { test, expect, mock } from "bun:test";

// The module we're going to mock is here:
import { foo } from "./module";

test("mock.module", async () => {
  const cjs = require("./module");
  expect(foo).toBe("bar");
  expect(cjs.foo).toBe("bar");

  // We update it here:
  mock.module("./module", () => {
    return {
      foo: "baz",
    };
  });

  // And the live bindings are updated.
  expect(foo).toBe("baz");

  // The module is also updated for CJS.
  expect(cjs.foo).toBe("baz");
});
