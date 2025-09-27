<script setup lang="ts">
import { defineEmits, ref, type Ref } from 'vue'

const searchQuery: Ref<string> = ref("")
const emit = defineEmits(["update:modelValue"])
</script>

<template>
  <div class="row mb-3">
    <div class="col-6">
      <input
        v-model="searchQuery"
        @input="emit('update:modelValue', searchQuery)"
        type="text"
        class="form-control"
        placeholder="Search by airport code, name, city or country..."
      />
    </div>

  </div>
</template>
