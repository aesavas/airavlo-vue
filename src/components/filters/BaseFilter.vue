<script setup lang="ts">
import type { Continent, PassengerVolume, Types } from '@/types'

defineProps({
  selectedValue: String,
  filterLabel: {
    type: String,
    default: "Label"
  },
  options: Array<Types | Continent | PassengerVolume>
})

defineEmits(["update:selectedValue"])
</script>

<template>
  <div class="col-4">
    <div class="form-floating">
      <select
        :value="selectedValue"
        :id="`${filterLabel.toLowerCase()}-filter`"
        class="form-select mb-3"
        @change="$emit('update:selectedValue', ($event.target as HTMLSelectElement).value)"
      >
        <option>All</option>
        <option
          v-for="value in options"
          :key="value"
          :value="value"
        >
          {{ value }}
        </option>
      </select>
      <label :for="`${filterLabel.toLowerCase()}-filter`">{{ filterLabel }}</label>
    </div>
  </div>
</template>
