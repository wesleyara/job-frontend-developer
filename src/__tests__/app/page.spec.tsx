import { render } from "@testing-library/react";
import Page from "~/app/page";
import { beforeEach, describe, expect, it } from "vitest";

describe("Page unit tests", async () => {
  let sut: JSX.Element;

  beforeEach(async () => {
    sut = await Page();
  });

  it("should mounted the page", () => {
    expect(sut).toBeDefined();
  });

  it("should render correctly", () => {
    const { container } = render(sut);

    expect(container).toMatchSnapshot();
  });
});
