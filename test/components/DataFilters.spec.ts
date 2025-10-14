import DataFilters from "@/components/DataFilters.vue";
import ContinentFilter from "@/components/filters/ContinentFilter.vue";
import CountryFilter from "@/components/filters/CountryFilter.vue";
import PassengerVolumeFilter from "@/components/filters/PassengerVolumeFilter.vue";
import TypeFilter from "@/components/filters/TypeFilter.vue";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it, vi } from "vitest";

const pinia = createPinia()

describe("DataFilters Component", () => {
  it("render DataFilters component to check children components", () => {
    const wrapper = mount(DataFilters, {
      global: {
        plugins: [pinia]
      }
    })

    expect(wrapper.findComponent(DataFilters).exists()).toBe(true)
    expect(wrapper.findComponent(ContinentFilter).exists()).toBe(true)
    expect(wrapper.findComponent(CountryFilter).exists()).toBe(true)
    expect(wrapper.findComponent(PassengerVolumeFilter).exists()).toBe(true)
    expect(wrapper.findComponent(TypeFilter).exists()).toBe(true)
  })

  it("check clear filter button is working", async () => {
    const wrapper = mount(DataFilters, {
      global: {
        plugins: [pinia]
      }
    })

    // Get the store instance to check state changes
    const { useAirportStore } = await import('@/stores/airports')
    const filtersStore = useAirportStore()

    // Set some initial filter values
    filtersStore.setFilters({
      continent: "Europe",
      country: "Germany",
      passengerVolume: "Large",
      type: "International"
    })

    // Verify filters are set
    expect(filtersStore.filters.continent).toBe("Europe")
    expect(filtersStore.filters.country).toBe("Germany")

    const buttons = wrapper.findAll("button")

    const clearButton = buttons[1]

    expect(clearButton.exists()).toBe(true)

    await clearButton.trigger("click")

    // Verify all filters are reset to "All"
    expect(filtersStore.filters.continent).toBe("All")
    expect(filtersStore.filters.country).toBe("All")
    expect(filtersStore.filters.passengerVolume).toBe("All")
    expect(filtersStore.filters.type).toBe("All")
  })

  it("check less/more filter button is working", async () => {
    const wrapper = mount(DataFilters, {
      global: {
        plugins: [pinia]
      }
    })

    const buttons = wrapper.findAll("button")

    const lessMoreButton = buttons[0]

    expect(lessMoreButton.exists()).toBe(true)

    expect(lessMoreButton.text()).toBe("More Filters")

    await lessMoreButton.trigger("click")

    expect(lessMoreButton.text()).toBe("Less Filters")
  })

  it("test filters watcher triggers setFilters", async () => {
    const { useAirportStore } = await import('@/stores/airports')
    const airportStore = useAirportStore()

    // Spy on the setFilters method to verify it's called
    const setFiltersSpy = vi.spyOn(airportStore, 'setFilters')

    const wrapper = mount(DataFilters, {
      global: {
        plugins: [pinia]
      }
    })

    // Change filters to trigger the watcher
    airportStore.filters.continent = "Europe"
    airportStore.filters.country = "Germany"

    // Wait for Vue's reactivity system to process
    await wrapper.vm.$nextTick()

    // Verify setFilters was called with the new values
    expect(setFiltersSpy).toHaveBeenCalledWith({
      continent: "Europe",
      country: "Germany",
      passengerVolume: "All",
      type: "All"
    })
  })
})
