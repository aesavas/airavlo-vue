import BaseFilter from "@/components/filters/BaseFilter.vue";
import PassengerVolumeFilter from "@/components/filters/PassengerVolumeFilter.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("Passenger Volume Component", () => {
  it("render passenger volume component", async () => {
    const wrapper = mount(PassengerVolumeFilter)

    expect(wrapper.findComponent(BaseFilter).exists()).toBe(true)

    const selectTag = wrapper.find("select")

    // Test using options
    const allOptions = selectTag.findAll("option")
    expect(allOptions.length).toBe(4)

    const allOptionsValues = allOptions.map(o => o.text())
    expect(allOptionsValues).toContain("Major Hub")

    // Test emit ability
    await selectTag.setValue("Major Hub")
    expect(wrapper.emitted()).toHaveProperty("update:selectedVolume")
    expect(wrapper.emitted("update:selectedVolume")![0]).toEqual(["Major Hub"])
  })

})
