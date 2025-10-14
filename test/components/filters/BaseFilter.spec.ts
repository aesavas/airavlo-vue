import BaseFilter from "@/components/filters/BaseFilter.vue"
import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"

describe("Base Filter", () => {
  it("render BaseFilter with default select", () => {
    const wrapper = mount(BaseFilter)

    const selectElement = wrapper.find('select')
    expect(selectElement.exists()).toBe(true)

    const allOptions = selectElement.findAll("option")
    expect(allOptions.length).toBe(1)

    const optionValues = allOptions.map(option => option.text())
    expect(optionValues).toEqual(["All"])
  })

  it("render BaseFilter with given props", () => {
    const wrapper = mount(BaseFilter, {
      props: {
        filterLabel: "Test Label",
        // @ts-expect-error - Testing with string array instead of expected object array type
        options: ["Option 1", "Option 2", "Option 3"],
      },
    })

    const selectElement = wrapper.find('select')
    expect(selectElement.exists()).toBe(true)

    const allOptions = selectElement.findAll("option")
    expect(allOptions.length).toBe(4)

    const optionValues = allOptions.map(option => option.text())
    expect(optionValues).toEqual(["All", "Option 1", "Option 2", "Option 3"])
  })
})
