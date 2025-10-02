import airportData from "@/data/airports-info.json";
import type { IAirport, ISortOption } from "@/types";
import { defineStore } from "pinia";
import { computed, reactive, type Reactive, ref, type Ref } from "vue";

export const useAirportStore = defineStore('airports', () => {
  // State
  const allAirports: Reactive<IAirport[]> = reactive(Object.values(airportData))
  const searchQuery = ref("")
  const filters = reactive({
    continent: "All",
    country: "All",
    passengerVolume: "All",
    type: "All"
  });
  const activeSort: Ref<ISortOption> = ref({id: 1, menuText: "Code (A-Z)",
    column: "code", direction: "asc"})


  // Getters
  const filteredAndSortedAirports = computed(() => {
    let result = allAirports

    result = result.filter(airport => {
      // Check if the search query matches any of the airport fields
      const matchesSearch = airport.code.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        airport.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        airport.city.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        airport.country.toLowerCase().includes(searchQuery.value.toLowerCase());

      // Check if the airport matches the selected filters
      const matchesContinent = filters.continent === "All" || airport.continent === filters.continent;
      const matchesCountry = filters.country === "All" || airport.country === filters.country;
      const matchesPassengerVolume = filters.passengerVolume === "All" || airport.passengerVolume === filters.passengerVolume;
      const matchesType = filters.type === "All" || airport.type === filters.type;

      // Return true if it matches the search and all filters
      return matchesSearch && matchesContinent && matchesCountry && matchesPassengerVolume && matchesType;
    })

    result.sort((x,y) => {
      const column = activeSort.value.column as keyof IAirport
      const direction = activeSort.value.direction === 'asc' ? 1 : -1

      return (x[column] as string).localeCompare(y[column] as string) * direction
    })

    return result
  })

  // Actions
  function setSearchQuery(query: string) {searchQuery.value = query}
  function setFilters(newFilters: object) {Object.assign(filters, newFilters)}
  function setSortingOption(sortOption: ISortOption) {activeSort.value = sortOption}

  return {
    searchQuery,
    filters,
    activeSort,
    filteredAndSortedAirports,
    setSearchQuery,
    setFilters,
    setSortingOption
  }
})
