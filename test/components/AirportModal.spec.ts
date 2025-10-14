import AirlineList from '@/components/AirlineList.vue'
import AirportModal from '@/components/AirportModal.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe("Airport Modal Component", () => {
  it("render airport modal test with show prop false", () => {
    const wrapper = mount(AirportModal, {
      props: {
        show: false,
        airport: null
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("render airport modal with props", () => {
    const wrapper = mount(AirportModal, {
      props: {
        show: true,
        airport: {
          name: "Test Airport",
          code: "TEST",
          city: "Test City",
          country: "Test Country",
          continent: "Test Continent",
          yearOpened: 2020,
          type: "Test Type",
          timezone: "+03:00",
          passengerVolume: "Major Hub",
          website: "https://testairport.com",
          majorAirlines: ["Test Airline 1", "Test Airline 2"],
          coordinates: {
            lat: 0,
            lng: 0
          }
        }
      }
    })

    expect(wrapper.findComponent(AirlineList).exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
