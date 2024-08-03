import { render } from "@testing-library/react";
import { PageFrame } from "~/components/PageFrame";
import { beforeEach, describe, expect, it } from "vitest";

describe("PageFrame", () => {
  let sut: JSX.Element;

  beforeEach(() => {
    sut = <PageFrame />;
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
  });

  it("should have a main element", () => {
    const { container } = render(sut);

    expect(container.querySelector("main")).not.toBeNull();
  });

  it("should render correctly", () => {
    const { container } = render(sut);

    expect(container).toMatchSnapshot();
  });
});
