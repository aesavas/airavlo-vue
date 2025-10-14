<script setup lang="ts">
import type { IAirport } from '@/types'
import AirlineList from './AirlineList.vue'

interface Props {
  airport: IAirport | null
  show?: boolean
}

withDefaults(defineProps<Props>(), {
  show: false,
  airport: null
})

defineEmits(['close'])
</script>

<template>
  <!-- Main modal container -->
  <div
    class="modal fade"
    :class="{ 'show': show }"
    :style="{ 'display': show ? 'block' : 'none' }"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div
        v-if="airport"
        class="modal-content"
      >
        <div class="modal-header">
          <h5 class="modal-title">{{ airport.name }} ({{ airport.code }})</h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6">
              <p><strong>City:</strong> {{ airport.city }}</p>
              <p><strong>Country:</strong> {{ airport.country }}</p>
              <p><strong>Continent:</strong> {{ airport.continent }}</p>
            </div>
            <div class="col-6">
              <p><strong>Year Opened:</strong> {{ airport.yearOpened }}</p>
              <p><strong>Type:</strong> {{ airport.type }}</p>
              <p><strong>Passenger Volume:</strong> {{ airport.passengerVolume }}</p>
            </div>
          </div>
          <div class="row">
            <p><strong>Website:</strong> <a :href="airport.website">{{ airport.website }}</a></p>
          </div>
          <div class="row">
            <AirlineList :major-airlines="airport.majorAirlines" />
          </div>
          <div class="row">
            <iframe
              width="300"
              height="200"
              frameborder="0"
              style="border:0"
              :src="`https://www.google.com/maps?q=${airport.coordinates.lat},${airport.coordinates.lng}&z=15&output=embed`"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Backdrop element required by Bootstrap -->
  <div
    v-if="show"
    class="modal-backdrop fade show"
  ></div>
</template>
