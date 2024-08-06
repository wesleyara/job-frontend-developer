import { render } from "@testing-library/react";
import { ShowAttraction } from "~/components/ShowAttraction";
import { beforeEach, describe, expect, it } from "vitest";

describe("SearchRoot unit test", () => {
  let sut: JSX.Element;

  beforeEach(() => {
    sut = (
      <ShowAttraction.Root>
        <span />
      </ShowAttraction.Root>
    );
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
  });

  it("should render correctly", () => {
    const { container } = render(sut);

    expect(container).toMatchSnapshot();
  });

  it("should have a section element", () => {
    const { container } = render(sut);

    expect(container.querySelector("section")).not.toBeNull();
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
