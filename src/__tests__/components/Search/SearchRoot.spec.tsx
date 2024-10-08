import { render } from "@testing-library/react";
import { Search } from "~/components/Search";
import { beforeEach, describe, expect, it } from "vitest";

describe("SearchRoot unit test", () => {
  let sut: JSX.Element;

  beforeEach(() => {
    sut = (
      <Search.Root>
        <span />
      </Search.Root>
    );
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
  });

  it("should render correctly", () => {
    const { container } = render(sut);

    expect(container).toMatchSnapshot();
  });

  it("should have a form element", () => {
    const { container } = render(sut);

    expect(container.querySelector("form")).not.toBeNull();
  });

  it("should have a child element", () => {
    const { container } = render(sut);

    expect(container.querySelector("span")).not.toBeNull();
  });

  it("should have a tailwind class name", () => {
    const { container } = render(sut);

    const element = container.querySelector(".flex");

    expect(element).not.toBeNull();
  });
});
