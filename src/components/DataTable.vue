<script setup lang="ts">
import type { IAirport } from '@/types'

const props = defineProps({
  airports: {
    type: Array as () => IAirport[],
    required: true
  }
})

const tableHeaders: string[] = [" ", "Code", "Airport Name", "City", "Country", "More Details"]

</script>

<template>
  <div class="table-wrapper">
    <table class="table table-striped table-responsive">
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
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  height: 80vh;
  overflow-y: auto;
}
</style>
