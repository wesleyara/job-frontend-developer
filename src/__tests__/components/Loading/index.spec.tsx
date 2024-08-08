import { render } from "@testing-library/react";
import { Loading } from "~/components/Loading";
import { beforeEach, describe, expect, it } from "vitest";

describe("Loading unit test", () => {
  let sut: JSX.Element;

  beforeEach(() => {
    sut = <Loading />;
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
});
