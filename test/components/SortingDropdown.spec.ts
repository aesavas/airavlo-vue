import SortingDropdown from "@/components/SortingDropdown.vue";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it, vi } from "vitest";

const pinia = createPinia()

describe("SortingDropdown component", () => {
  it("render SortingDropdown component", () => {
    const wrapper = mount(SortingDropdown, {
      global: {
        plugins: [pinia]
      }
    })

    const options = wrapper.find("ul").findAll("li")

    expect(options.length).toBe(4)

    const optionValues = options.map(o => o.text())

    expect(optionValues).toEqual([
      "Code (A-Z)",
      "Code (Z-A)",
      "Name (A-Z)",
      "Name (Z-A)"
    ])
  })

  it("change table order via SortingDropdown component", async () => {

    const { useAirportStore } = await import('@/stores/airports')
    const airportStore = useAirportStore()

    // Spy on the setSortingOption method
    const setSortingOptionSpy = vi.spyOn(airportStore, 'setSortingOption')

    const wrapper = mount(SortingDropdown, {
      global: {
        plugins: [pinia]
      }
    })

    const options = wrapper.find("ul").findAll("li")

    await options[3].trigger("click")

    expect(setSortingOptionSpy).toHaveBeenCalledWith({
      id: 4,
      menuText: "Name (Z-A)",
      column: "name",
      direction: "desc"
    })
  })
})
