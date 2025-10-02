<script setup lang="ts">
import type { Continent } from '@/types'
import BaseFilter from './BaseFilter.vue'

const continents: Continent[] = [
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
]

defineProps({
  selectedContinent: String
})

defineEmits(["update:selectedContinent"])
</script>

<template>
  <BaseFilter
    :selected-value="selectedContinent"
    filter-label="Continent"
    :options="continents"
    @update:selected-value="$emit('update:selectedContinent', $event)"
  />
</template>
