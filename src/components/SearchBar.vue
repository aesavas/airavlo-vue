<script setup lang="ts">
import { useAirportStore } from '@/stores/airports'

const airportStore = useAirportStore()

const { setSearchQuery } = airportStore
</script>

<template>
  <div class="row mb-3">
    <div class="col-12 col-md-8">
      <input
        @input="setSearchQuery(($event.target as HTMLSelectElement).value)"
        type="text"
        class="form-control"
        placeholder="Search by airport code, name, city or country..."
      />
    </div>

  </div>
</template>
