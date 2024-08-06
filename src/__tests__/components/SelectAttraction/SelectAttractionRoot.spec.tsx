import { render } from "@testing-library/react";
import { SelectAttraction } from "~/components/SelectAttraction";
import { beforeEach, describe, expect, it } from "vitest";

describe("SelectAttractionRoot unit test", () => {
  let sut: JSX.Element;

  beforeEach(() => {
    sut = (
      <SelectAttraction.Root>
        <span />
      </SelectAttraction.Root>
    );
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
  });

  it("should render correctly", () => {
    const { container } = render(sut);

    expect(container).toMatchSnapshot();
  });

  it("should have a div element", () => {
    const { container } = render(sut);

    expect(container.querySelector("div")).not.toBeNull();
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
