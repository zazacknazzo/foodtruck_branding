import { describe, expect, it } from "vitest";
import { formatPriceInCents } from "./format-price";

describe("formatPriceInCents", () => {
  it("formats centavos as Brazilian reais", () => {
    expect(formatPriceInCents(12345)).toBe("R$\u00a0123,45");
  });

  it("preserves centavos at the safe integer limit", () => {
    expect(formatPriceInCents(Number.MAX_SAFE_INTEGER)).toBe("R$\u00a090.071.992.547.409,91");
  });

  it.each([
    [0, "R$\u00a00,00"],
    [1, "R$\u00a00,01"],
    [10, "R$\u00a00,10"],
    [100, "R$\u00a01,00"],
    [100000, "R$\u00a01.000,00"],
  ])("formats %i centavos with two decimals", (cents, expected) => {
    expect(formatPriceInCents(cents)).toBe(expected);
  });

  it.each([-1, 1.5, NaN, Infinity, -Infinity, Number.MAX_SAFE_INTEGER + 1])(
    "rejects invalid price input %s",
    (cents) => {
      expect(() => formatPriceInCents(cents)).toThrow(RangeError);
    },
  );
});
