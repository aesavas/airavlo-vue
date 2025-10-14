import AirlineList from "@/components/AirlineList.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("Airline List Component", () => {
  it("render airline list component", () => {
    const wrapper = mount(AirlineList, {
      props: {
        majorAirlines: ["Foo Airlines", "Bar Airlines"]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
