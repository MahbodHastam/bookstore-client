<template>
  <a href="/" v-if="text" class="font-lalezar text-3xl text-indigo-700 relative">
    <BookOpenIcon
      class="h-12 w-12 inline -translate-y-1 bg-indigo-100 px-2 rounded-lg ml-2"
    />
    کتابستان
  </a> 
  <a href="/" v-else class="font-lalezar text-3xl text-indigo-700 relative">
    <BookOpenIcon
      class="h-12 w-12 inline -translate-y-1 bg-indigo-100 px-2 rounded-lg ml-2"
    />
  </a>
</template>

<script setup>
import { BookOpenIcon } from '@heroicons/vue/solid'

defineProps({
  text: Boolean,
})
</script>
