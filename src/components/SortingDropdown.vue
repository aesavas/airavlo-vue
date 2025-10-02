<script setup lang="ts">
import { useAirportStore } from "@/stores/airports"
import type { ISortOption } from "@/types"
import { storeToRefs } from "pinia"

const airportStore = useAirportStore()

const { activeSort } = storeToRefs(airportStore)

const { setSortingOption } = airportStore

const sortOptions: ISortOption[] = [
  { id: 1, menuText: "Code (A-Z)", column: "code", direction: "asc" },
  { id: 2, menuText: "Code (Z-A)", column: "code", direction: "desc" },
  { id: 3, menuText: "Name (A-Z)", column: "name", direction: "asc" },
  { id: 4, menuText: "Name (Z-A)", column: "name", direction: "desc" },
]
</script>

<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
    >Sort By</button>
    <ul class="dropdown-menu dropdown-menu-dark">
      <li
        v-for="option in sortOptions"
        :key="option.menuText"
        @click="setSortingOption(option)"
      ><span :class="`dropdown-item ${option.id === activeSort.id ? 'active' : ''}`">{{ option.menuText }}</span></li>
    </ul>
  </div>
</template>
