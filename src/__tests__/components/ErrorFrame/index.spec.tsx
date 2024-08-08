import { render } from "@testing-library/react";
import { ErrorFrame } from "~/components/ErrorFrame";
import { beforeEach, describe, expect, it } from "vitest";

describe("ErrorFrame unit test", () => {
  let sut: JSX.Element;

  const errorMock = new Error("test error");

  beforeEach(() => {
    sut = <ErrorFrame error={errorMock} />;
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

  it("should have a icon element", () => {
    const { container } = render(sut);

    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("should have a span element", () => {
    const { container } = render(sut);

    expect(container.querySelector("span")).not.toBeNull();
  });

  it("should display the error message", () => {
    const { container } = render(sut);

    expect(container.querySelector("span")?.textContent).toBe("test error");
  });
});
