<script setup lang="ts">
const emit = defineEmits(["update:searchQuery"])
</script>

<template>
  <div class="row mb-3">
    <div class="col-6">
      <input
        @input="emit('update:searchQuery', ($event.target as HTMLSelectElement).value)"
        type="text"
        class="form-control"
        placeholder="Search by airport code, name, city or country..."
      />
    </div>

  </div>
</template>
