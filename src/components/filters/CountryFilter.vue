<script setup lang="ts">
import countryInfo from '@/data/countries.json'
import type { ICountry } from '@/types'
import { reactive, type Reactive } from 'vue'

const countries: Reactive<ICountry[]> = reactive(countryInfo)

const props = defineProps({
  selectedCountry: String
})

const emit = defineEmits(["update:selectedCountry"])
</script>

<template>
  <div class="col-4">
    <div class="form-floating">
      <select
        :value="props.selectedCountry"
        id="countryFilter"
        class="form-select mb-3"
        @change="emit('update:selectedCountry', ($event.target as HTMLSelectElement).value)"
      >
        <option value="All">All</option>
        <option
          v-for="country in countries"
          :key="country.countryCode"
          :value="country.name"
        >
          {{ country.flag }} {{ country.name }}
        </option>
      </select>
      <label for="countryFilter">Country</label>
    </div>
  </div>
</template>
