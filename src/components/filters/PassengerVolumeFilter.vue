<script setup lang="ts">
import type { PassengerVolume } from "@/types"
import BaseFilter from "./BaseFilter.vue"

const passengerVolumes: PassengerVolume[] = ["Medium", "Large", "Major Hub"]

defineProps({
  selectedVolume: String
})

defineEmits(["update:selectedVolume"])
</script>

<template>
  <BaseFilter
    :selected-value="selectedVolume"
    filter-label="Passenger Volume"
    :options="passengerVolumes"
    @update:selected-value="$emit('update:selectedVolume', $event)"
  />
</template>
