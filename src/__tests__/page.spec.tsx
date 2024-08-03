import { beforeEach, describe, expect, it } from "vitest";

import Page from "../app/page";

describe("Page unit tests", () => {
  let sut: JSX.Element;

  beforeEach(() => {
    sut = <Page />;
  });

  it("should mounted the page", () => {
    expect(sut).toBeDefined();
  });
});
