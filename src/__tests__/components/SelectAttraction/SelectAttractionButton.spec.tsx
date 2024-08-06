import { render } from "@testing-library/react";
import { SelectAttraction } from "~/components/SelectAttraction";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("SelectAttractionButton unit test", () => {
  const onClickMock = vi.fn();
  let sut: JSX.Element;

  beforeEach(() => {
    sut = <SelectAttraction.Button onClick={onClickMock} />;
  });

  it("should be defined", () => {
    expect(sut).toBeDefined();
  });

  it("should render correctly", () => {
    const { container } = render(sut);

    expect(container).toMatchSnapshot();
  });

  it("should have a button element", () => {
    const { container } = render(sut);

    expect(container.querySelector("button")).not.toBeNull();
  });

  it("should have an onClick function", () => {
    const { container } = render(sut);
    const button = container.querySelector("button");

    expect(button).not.toBeNull();

    button?.click();
  });

  it("should call the onClick function", () => {
    const { container } = render(sut);
    const button = container.querySelector("button");

    expect(button).not.toBeNull();

    button?.click();

    expect(onClickMock).toHaveBeenCalled();
  });
});
