const WIDE_SPAN = "col-span-full md:col-span-2";
const NARROW_SPAN = "col-span-full md:col-span-1";

/** The first and third cards span two columns; every other card spans one. */
export function getRepoGridSpan(index: number): string {
  return index === 0 || index === 2 ? WIDE_SPAN : NARROW_SPAN;
}
