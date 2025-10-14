import CountryFilter from "@/components/filters/CountryFilter.vue"
import countryInfo from "@/data/countries.json"
import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"


describe("Country Filter Component", () => {
  it("render country filter without props", async () => {
    const wrapper = mount(CountryFilter, {
      props: {
        selectedCountry: "All"
      }
    })

    const selectTag = wrapper.find("select")

    // Test using options
    const allOptions = selectTag.findAll("option")
    expect(allOptions.length).toBe(countryInfo.length + 1) // +1 comes from 'All'

    // // Test emit ability
    await selectTag.setValue("Turkey")
    expect(wrapper.emitted()).toHaveProperty("update:selectedCountry")
    expect(wrapper.emitted("update:selectedCountry")![0]).toEqual(["Turkey"])
  })
})
