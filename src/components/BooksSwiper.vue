<template>
  <div>
    <h4 class="text-2xl text-primary-700">
      <BookOpenIcon class="w-6 h-6" />
      {{ headingTitle }}
    </h4>
  </div>
</template>

<script setup>
import { BookOpenIcon } from '@heroicons/vue/outline'

defineProps({
  headingTitle: String,
  type: {
    validator(value) {
      return ['popular', 'newest', 'non-free'].includes(value)
    }
  },
})
</script>
