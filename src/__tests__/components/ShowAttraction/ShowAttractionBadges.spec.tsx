import { render } from "@testing-library/react";
import { attractionMock } from "~/__tests__/mocks";
import { ShowAttraction } from "~/components/ShowAttraction";
import { beforeEach, describe, expect, it } from "vitest";

describe("ShowAttractionBadges unit test", () => {
  let sut: JSX.Element;

  beforeEach(() => {
    sut = (
      <ShowAttraction.Badges classifications={attractionMock.classifications} />
    );
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

  it("should have a tailwind class name", () => {
    const { container } = render(sut);

    const element = container.querySelector(".flex");

    expect(element).not.toBeNull();
  });
});
