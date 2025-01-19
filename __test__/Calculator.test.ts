import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Calculator from "../components/Calculator.vue";

describe("Calculator", () => {
  it("renders calculator", () => {
    const wrapper = mount(Calculator);
    expect(wrapper.find(".calculator-container").exists()).toBe(true);
  });

  it("displays initial value of 0", () => {
    const wrapper = mount(Calculator);
    expect(wrapper.find(".display").text()).toBe("0");
  });

  it("can input numbers", async () => {
    const wrapper = mount(Calculator);
    const buttons = wrapper.findAll("button");
    const oneButton = buttons.find((b) => b.text() === "1");
    await oneButton?.trigger("click");
    expect(wrapper.find(".display").text()).toBe("1");
  });

  it("can perform addition", async () => {
    const wrapper = mount(Calculator);

    // Encontrar y hacer clic en los botones necesarios
    const buttons = wrapper.findAll("button");

    // Click 1
    await buttons.find((b) => b.text() === "1")?.trigger("click");
    // Click +
    await buttons.find((b) => b.text() === "+")?.trigger("click");
    // Click 2
    await buttons.find((b) => b.text() === "2")?.trigger("click");
    // Click =
    await buttons.find((b) => b.text() === "=")?.trigger("click");

    expect(wrapper.find(".display").text()).toBe("3");
  });

  it("can clear display", async () => {
    const wrapper = mount(Calculator);
    const buttons = wrapper.findAll("button");

    // Click 1
    await buttons.find((b) => b.text() === "1")?.trigger("click");
    // Click C
    await buttons.find((b) => b.text() === "C")?.trigger("click");

    expect(wrapper.find(".display").text()).toBe("0");
  });
});
