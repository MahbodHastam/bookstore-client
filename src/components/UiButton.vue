<template>
  <a :href="link" v-if="link" v-bind="$attrs" class="button">
    <slot />
  </a>
  <button v-else v-bind="$attrs" class="button">
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
defineProps({
  link: [Boolean, String],
})
</script>

<style>
.button {
  @apply font-medium transition py-2 px-4 rounded-lg focus:ring-2 focus:ring-inset;
}

.button.primary {
  @apply text-primary-600 hover:text-primary-500 bg-primary-50 hover:bg-primary-100 focus:ring-primary-400;
}

.button.primary-solid {
  @apply text-gray-100 bg-primary-600 hover:bg-primary-700 focus:ring-primary-400;
}

/* .button.secondary {
  @apply text-blue-600 hover:text-blue-500 bg-blue-50 hover:bg-blue-100 focus:ring-blue-400;
} */
</style>
