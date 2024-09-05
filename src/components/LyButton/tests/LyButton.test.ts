import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import type { MountingOptions, VueWrapper, DOMWrapper } from "@vue/test-utils";
import { LyButton } from "@/index";

describe("LyButton test", () => {
  const findButton = (wrapper: VueWrapper): DOMWrapper<HTMLButtonElement> =>
    wrapper.find(".ly-button");

  const componentFactory = (props = {}, options: MountingOptions<any> = {}) => {
    return mount(LyButton, {
      props: {
        ...props,
      },
      ...options,
    });
  };

  it("Should render a vue instance", () => {
    const wrapper = componentFactory();
    expect(wrapper).toBeTruthy();
  });

  it("Should be a success variant", () => {
    const wrapper = componentFactory();
    expect(findButton(wrapper).classes()).toContain("ly-variant--success");
  });

  it("Should be a danger variant", () => {
    const wrapper = componentFactory({ variant: "danger" });
    expect(findButton(wrapper).classes()).toContain("ly-variant--danger");
  });

  it("Should be a warning variant", () => {
    const wrapper = componentFactory({ variant: "warning" });
    expect(findButton(wrapper).classes()).toContain("ly-variant--warning");
  });

  it("Should be disabled", () => {
    const wrapper = componentFactory({ disabled: true });
    expect(findButton(wrapper).element.disabled).toBe(true);
  });
});
