<template>
  <a href="/" v-if="text" class="font-lalezar text-3xl text-primary-700 relative">
    <BookOpenIcon
      class="h-12 w-12 inline -translate-y-1 bg-primary-100 px-2 rounded-lg ml-2"
    />
    کتابستانـ
  </a> 
  <a href="/" v-if="!text && !textOnly" class="font-lalezar text-3xl text-primary-700 relative">
    <BookOpenIcon
      class="h-12 w-12 inline -translate-y-1 bg-primary-100 px-2 rounded-lg ml-2"
    />
  </a>
  <a href="/" v-if="textOnly" :class="textOnly" v-bind="$attrs" class="font-lalezar text-primary-700">
    کتابستانـ
  </a>
</template>

<script setup>
import { BookOpenIcon } from '@heroicons/vue/solid'

defineProps({
  text: Boolean,
  textOnly: {
    type: [Boolean, String],
    default() {
      return false
    }
  },
})
</script>
