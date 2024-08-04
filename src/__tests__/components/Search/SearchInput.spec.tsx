import { render } from "@testing-library/react";
import { Search } from "~/components/Search";
import { beforeEach, describe, expect, it } from "vitest";

describe("SearchInput unit test", () => {
  let sut: JSX.Element;

  beforeEach(() => {
    sut = <Search.Input />;
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
  });

  it("should render correctly", () => {
    const { container } = render(sut);

    expect(container).toMatchSnapshot();
  });

  it("should have an input element", () => {
    const { container } = render(sut);

    expect(container.querySelector("input")).not.toBeNull();
  });

  it("should have a placeholder", () => {
    const { container } = render(sut);

    expect(container.querySelector("input")?.getAttribute("placeholder")).toBe(
      "Busque o artista",
    );
  });

  it("should have a type of text", () => {
    const { container } = render(sut);

    expect(container.querySelector("input")?.getAttribute("type")).toBe("text");
  });

  it("should type in the input", () => {
    const { container } = render(sut);
    const input = container.querySelector("input");

    expect(input).not.toBeNull();

    input?.setAttribute("value", "teste");

    expect(input?.getAttribute("value")).toBe("teste");
  });

  it("should have a tailwind class name", () => {
    const { container } = render(sut);

    const element = container.querySelector(".rounded-md");

    expect(element).not.toBeNull();
  });
});
