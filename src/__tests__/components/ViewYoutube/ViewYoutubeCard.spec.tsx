import { render } from "@testing-library/react";
import { youtubeVideosDetailsMock } from "~/__tests__/mocks";
import { ViewYoutube } from "~/components/ViewYoutube";
import { beforeEach, describe, expect, it } from "vitest";

describe("ShowAttractionInfo unit test", () => {
  let sut: JSX.Element;

  beforeEach(() => {
    sut = <ViewYoutube.Card item={youtubeVideosDetailsMock} />;
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
  });

  it("should render correctly", () => {
    const { container } = render(sut);

    expect(container).toMatchSnapshot();
  });

  it("should have a span element", () => {
    const { container } = render(sut);

    expect(container.querySelector("span")).not.toBeNull();
  });

  it("should have a img element", () => {
    const { container } = render(sut);

    expect(container.querySelector("img")).not.toBeNull();
  });

  it("should have a icon element", () => {
    const { container } = render(sut);

    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("should have a tailwind class name", () => {
    const { container } = render(sut);

    const element = container.querySelector(".flex");

    expect(element).not.toBeNull();
  });
});
