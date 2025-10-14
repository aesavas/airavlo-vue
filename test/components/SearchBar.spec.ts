import SearchBar from "@/components/SearchBar.vue";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it, vi } from "vitest";

const pinia = createPinia()

const mockSetSearchQueryFn = vi.fn()

vi.mock("@/stores/airports", () => {
  return {
    useAirportStore: () => ({
      setSearchQuery: mockSetSearchQueryFn
    })
  }
})

describe("SearchBar component", () => {
  it("render SearchBar component", () => {
    const wrapper = mount(SearchBar, {
      global: {
        plugins: [pinia]
      }
    })

    const input = wrapper.find("input")

    expect(input.exists()).toBe(true)

    expect(input.attributes("placeholder")).toBe("Search by airport code, name, city or country...")
  })

  it("test setSearchQuery function in SearchBar component", async () => {
    const wrapper = mount(SearchBar, {
      global: {
        plugins: [pinia]
      }
    })

    const input = wrapper.find("input")

    input.setValue("hello")

    expect(mockSetSearchQueryFn).toBeCalledWith("hello")
  })
})
