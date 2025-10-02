<script setup lang="ts">
import ContinentFilter from '@/components/filters/ContinentFilter.vue'
import CountryFilter from '@/components/filters/CountryFilter.vue'
import PassengerVolumeFilter from '@/components/filters/PassengerVolumeFilter.vue'
import TypeFilter from '@/components/filters/TypeFilter.vue'
import { useAirportStore } from '@/stores/airports'
import { storeToRefs } from 'pinia'
import { ref, watch } from "vue"

const showMoreFilters = ref(false)

const airportStore = useAirportStore()

const { filters } = storeToRefs(airportStore)
const { setFilters } = airportStore

const clearFilter = () => {
  setFilters({
    continent: "All",
    country: "All",
    passengerVolume: "All",
    type: "All"
  })
}

watch(filters, () => {
  setFilters(filters.value)
}, { deep: true })

</script>

<template>
  <div class="row align-items-stretch">
    <ContinentFilter
      :selected-continent="filters.continent"
      @update:selected-continent="v => filters.continent = v"
    />
    <CountryFilter
      :selected-country="filters.country"
      @update:selected-country="v => filters.country = v"
    />
    <div class="col-4 d-flex justify-content-end">
      <button
        class="btn btn-secondary"
        style="height: 3.5rem;"
        @click="
          showMoreFilters = !showMoreFilters"
      >{{ showMoreFilters ? 'Less Filters' : 'More Filters' }}</button>
      <button
        class="btn btn-secondary ms-2"
        style="height: 3.5rem;"
        @click="clearFilter"
      >Clear Filters</button>
    </div>
  </div>
  <div
    class="row"
    v-if="showMoreFilters"
  >
    <PassengerVolumeFilter
      :selected-volume="filters.passengerVolume"
      @update:selected-volume="v => filters.passengerVolume = v"
    />
    <TypeFilter
      :selected-type="filters.type"
      @update:selected-type="v => filters.type = v"
    />
  </div>

</template>
