import { render } from "@testing-library/react";
import { ViewYoutube } from "~/components/ViewYoutube";
import { beforeEach, describe, expect, it } from "vitest";

describe("ViewYoutubeRoot unit test", () => {
  let sut: JSX.Element;

  beforeEach(() => {
    sut = (
      <ViewYoutube.Root>
        <span />
      </ViewYoutube.Root>
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
