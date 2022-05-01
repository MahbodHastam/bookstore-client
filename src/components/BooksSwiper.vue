<template>
  <div>
    <h4 class="text-4xl font-bold text-primary-600 text-center space-s-4">
      <HeartIcon
        :class="headingTitleIconClassNames"
        v-if="type === 'popular'"
      />
      <SparklesIcon
        :class="headingTitleIconClassNames"
        v-else-if="type === 'newest'"
      />
      <KeyIcon
        :class="headingTitleIconClassNames"
        v-else-if="type === 'non-free'"
      />
      <BookOpenIcon :class="headingTitleIconClassNames" v-else />
      <span>
        {{ headingTitle }}
      </span>
    </h4>
    swiper
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { BookOpenIcon } from '@heroicons/vue/outline'
import { HeartIcon, SparklesIcon, KeyIcon } from '@heroicons/vue/solid'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { popularBooksRaw, newestBooksRaw, nonFreeBooksRaw } from '../../data'

const headingTitleIconClassNames = `w-12 h-12 inline-block -mt-2`

defineProps({
  headingTitle: {
    type: [null, String],
    default: 'کتاب‌های اخیر',
  },
  type: {
    validator(value) {
      return ['popular', 'newest', 'non-free'].includes(value)
    },
    default: 'popular',
  },
})

function getBooks(neededType) {
  if (neededType === 'pupolar') return popularBooksRaw
  if (neededType === 'newest') return newestBooksRaw
  if (neededType === 'non-free') return nonFreeBooksRaw
}

const books = getBooks(type)
</script>
