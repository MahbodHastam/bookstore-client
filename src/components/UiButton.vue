<template>
  <a :href="link" v-if="link" v-bind="$attrs" class="button">
    <slot />
  </a>
  <router-link v-if="route" :to="route" v-bind="$attrs" class="button">
    <slot />
  </router-link>
  <button v-if="!link && !route" v-bind="$attrs" class="button">
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
  route: [Boolean, String],
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

.button.secondary {
  @apply text-secondary-600 hover:text-secondary-500 bg-secondary-50 hover:bg-secondary-100 focus:ring-secondary-400;
}

.button.secondary-solid {
  @apply text-gray-100 bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-400;
}
</style>
