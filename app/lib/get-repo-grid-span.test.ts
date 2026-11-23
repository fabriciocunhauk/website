import { describe, expect, it } from "vitest";
import { getRepoGridSpan } from "./get-repo-grid-span";

describe("getRepoGridSpan", () => {
  it("makes the first and third cards wide", () => {
    expect(getRepoGridSpan(0)).toBe("col-span-full md:col-span-2");
    expect(getRepoGridSpan(2)).toBe("col-span-full md:col-span-2");
  });

  it("makes every other card narrow", () => {
    for (const index of [1, 3, 4, 5, 6]) {
      expect(getRepoGridSpan(index)).toBe("col-span-full md:col-span-1");
    }
  });
});
