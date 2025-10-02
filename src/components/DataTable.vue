<script setup lang="ts">
import type { IAirport } from '@/types'

defineProps({
  airports: {
    type: Array as () => IAirport[],
    required: true
  }
})

const tableHeaders: string[] = [" ", "Code", "Airport Name", "City", "Country", "More Details"]

</script>

<template>
  <div class="table-wrapper hide-scrollbar my-3">
    <table class="table table-striped table-responsive table-bordered">
      <thead>
        <tr>
          <td
            class="fs-4"
            v-for="header in tableHeaders"
            :key="header"
          >{{ header }}</td>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <template v-if="airports && airports.length > 0">
          <tr
            v-for="(airport, index) in airports"
            :key="airport.code"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ airport.code }}</td>
            <td>{{ airport.name }}</td>
            <td>{{ airport.city }}</td>
            <td>{{ airport.country }}</td>
            <td><button class="btn btn-link link-offset-2 link-underline link-underline-opacity-0">🔍 More info</button>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td
            :colspan="tableHeaders.length"
            class="text-center p-4"
          >
            There is no data to display.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  height: 80vh;
  overflow-y: auto;
}

.hide-scrollbar {
  overflow: auto;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}
</style>
