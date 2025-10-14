import AirportModal from "@/components/AirportModal.vue"
import DataTable from "@/components/DataTable.vue"
import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"

const airports = [
          {
            code: "TST",
            name: "Test International Airport",
            city: "Test City",
            country: "Test Country",
            type: "International",
            continent: "Europe",
            timezone: "+02:00",
            passengerVolume: "Major Hub",
            yearOpened: 2010,
            majorAirlines: ["Test Airways", "Mock Airlines", "Fake Flight Co"],
            coordinates: { lat: 45.1234, lng: 12.5678 },
            website: "https://www.testairport.com"
          },
          {
            code: "MCK",
            name: "Mock Regional Airport",
            city: "Mock Town",
            country: "Mock Nation",
            type: "Domestic",
            continent: "Asia",
            timezone: "+08:00",
            passengerVolume: "Large",
            yearOpened: 1995,
            majorAirlines: ["Regional Express", "Domestic Wings"],
            coordinates: { lat: 35.9876, lng: 139.5432 },
            website: "https://www.mockairport.com"
          }
        ]

describe("DataTable component", () => {
  it("render DataTable with correct headers", () => {
    const wrapper = mount(DataTable, {
      props: {
        airports
      }
    })

    const allHeaders = wrapper.find("thead").find("tr").findAll("td")
    const allHeaderValues = allHeaders.map(h => h.text())

    expect(allHeaderValues).toEqual(["", "Code", "Airport Name", "City", "Country", "More Details"])
  })

  it("render DataTable component with airport data", () => {
    const wrapper = mount(DataTable, {
      props: {
        airports
      }
    })

    expect(wrapper.find("table").exists()).toBe(true)

    const tableRows = wrapper.find("tbody").findAll("tr")
    expect(tableRows.length).toBe(2)

    const tableRowValues = tableRows.map(tr => tr.findAll("td").map(td => td.text()))
    expect(tableRowValues).toEqual([
      ["1", "TST", "Test International Airport", "Test City", "Test Country", "🔍 More info"],
      ["2", "MCK", "Mock Regional Airport", "Mock Town", "Mock Nation", "🔍 More info"]
    ])
  })

  it("render DataTable with no airport data", () => {
    const wrapper = mount(DataTable, {
      props: {
        airports: []
      }
    })

    expect(wrapper.find("table").exists()).toBe(true)

    const tableRows = wrapper.find("tbody").findAll("tr")
    expect(tableRows.length).toBe(1)

    const tableRowValues = tableRows.map(tr => tr.findAll("td").map(td => td.text()))
    expect(tableRowValues).toEqual([
      ["There is no data to display."]
    ])
  })

  it("opens modal when more info button is clicked", async () => {
    const wrapper = mount(DataTable, {
      props: {
        airports
      }
    })

    const firstRowMoreInfoButton = wrapper.find("button")

    expect(firstRowMoreInfoButton.exists()).toBe(true)

    await firstRowMoreInfoButton.trigger("click")

    const airportModal = wrapper.findComponent(AirportModal)

    expect(airportModal.props("show")).toBe(true)
    expect(airportModal.props("airport")).toEqual(airports[0])
  })
})
