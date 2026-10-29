const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatPriceInCents(cents: number): string {
  if (!Number.isSafeInteger(cents) || cents < 0) {
    throw new RangeError("Price must be a non-negative safe integer in centavos.");
  }

  const wholeReais = BigInt(cents) / 100n;
  const centavos = (cents % 100).toString().padStart(2, "0");

  return brl
    .formatToParts(wholeReais)
    .map((part) => (part.type === "fraction" ? centavos : part.value))
    .join("");
}
