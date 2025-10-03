<script setup lang="ts">
defineProps({
  majorAirlines: Array<string>
})
</script>

<template>
  <div
    class="accordion mt-2 mb-3"
    id="accordion"
  >
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          <p><strong>Major Airlines:</strong></p>
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        data-bs-parent="#accordion"
      >
        <div class="accordion-body">
          <div
            v-for="value in majorAirlines"
            :key="value"
          >🛫 {{ value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
