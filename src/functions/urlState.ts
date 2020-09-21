export const toNumber = (x: string | number | null | undefined): number | null => {
  if (typeof x === "number") return x;
  if (!x) return null;
  const n = parseInt(x, 10);
  if (!Number.isFinite(n)) return null;
  return n;
};
