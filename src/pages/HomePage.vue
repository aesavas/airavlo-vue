<script setup lang="ts">
import DataFilters from '@/components/DataFilters.vue'
import DataTable from '@/components/DataTable.vue'
import NavBar from '@/components/NavBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import SortingDropdown from '@/components/SortingDropdown.vue'
import { useAirportStore } from '@/stores/airports'
import { storeToRefs } from 'pinia'

const airportStore = useAirportStore()

const { filteredAndSortedAirports } = storeToRefs(airportStore)
</script>

<template>
  <NavBar />
  <main class="container mt-4">
    <SearchBar />
    <DataFilters />
    <SortingDropdown />
    <DataTable :airports="filteredAndSortedAirports" />
  </main>
</template>
