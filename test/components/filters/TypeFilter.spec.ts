import BaseFilter from "@/components/filters/BaseFilter.vue";
import TypeFilter from "@/components/filters/TypeFilter.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("Airport Type Filter Component", () => {
  it("render type filter component", async () => {
    const wrapper = mount(TypeFilter)

    expect(wrapper.findComponent(BaseFilter).exists()).toBe(true)

    const selectTag = wrapper.find("select")

    // Test using options
    const allOptions = selectTag.findAll("option")
    expect(allOptions.length).toBe(3)

    const allOptionsValues = allOptions.map(o => o.text())
    expect(allOptionsValues).toContain("Domestic")

    // Test emit ability
    await selectTag.setValue("Domestic")
    expect(wrapper.emitted()).toHaveProperty("update:selectedType")
    expect(wrapper.emitted("update:selectedType")![0]).toEqual(["Domestic"])
  })

})
