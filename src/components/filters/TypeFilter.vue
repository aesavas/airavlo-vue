<script setup lang="ts">
import type { Types } from "@/types"
import BaseFilter from "./BaseFilter.vue"

const types: Types[] = ["Domestic", "International"]

defineProps({
  selectedType: String
})

defineEmits(["update:selectedType"])
</script>

<template>
  <BaseFilter
    :selected-value="selectedType"
    filter-label="Airport Type"
    :options="types"
    @update:selected-value="$emit('update:selectedType', $event)"
  />
</template>
