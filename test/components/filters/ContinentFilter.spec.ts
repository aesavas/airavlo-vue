import BaseFilter from "@/components/filters/BaseFilter.vue"
import ContinentFilter from "@/components/filters/ContinentFilter.vue"
import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"


describe("Continent Filter Component", () => {
  it("render continent filter without props", async () => {
    const wrapper = mount(ContinentFilter)

    // Test using BaseFilter component
    expect(wrapper.findComponent(BaseFilter).exists()).toBe(true)

    const selectTag = wrapper.find("select")

    // Test using options
    const allOptions = selectTag.findAll("option")
    expect(allOptions.length).toBe(8)

    const allOptionsValues = allOptions.map(o => o.text())
    expect(allOptionsValues).toEqual([
      "All",
      "Africa",
      "Antarctica",
      "Asia",
      "Europe",
      "North America",
      "Oceania",
      "South America",
    ])

    // Test emit ability
    await selectTag.setValue("Europe")
    expect(wrapper.emitted()).toHaveProperty("update:selectedContinent")
    expect(wrapper.emitted("update:selectedContinent")![0]).toEqual(["Europe"])
  })
})
