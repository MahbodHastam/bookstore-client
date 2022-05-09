<template>
  <div class="mb-12">
    <h4 class="text-4xl font-bold text-primary-600 text-center space-s-4 mb-12">
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
        {{ props.headingTitle }}
      </span>
    </h4>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :breakpoints="breakpoints"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      class="!py-20 !px-3"
    >
      <swiper-slide v-for="(book, idx) in books" :key="idx">
        <books-swiper-item :book="book" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { BookOpenIcon } from '@heroicons/vue/outline'
import {
  HeartIcon,
  SparklesIcon,
  KeyIcon,
} from '@heroicons/vue/solid'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'
import { Autoplay } from 'swiper'
import { allBooksRaw, newestBooksRaw, premiumBooksRaw } from '../data'
import BooksSwiperItem from './BooksSwiperItem.vue'

const headingTitleIconClassNames = `w-12 h-12 inline-block -mt-2`

const props = defineProps({
  headingTitle: {
    type: [null, String],
    default: 'کتاب‌های اخیر',
  },
  type: {
    validator(value) {
      return ['popular', 'newest', 'premium'].includes(value)
    },
    default: 'popular',
  },
})

const getBooks = (type) => {
  if (type === 'popular') return allBooksRaw
  if (type === 'newest') return newestBooksRaw
  if (type === 'premium') return premiumBooksRaw
}

const books = getBooks(props.type)

// Swiper
const modules = [Autoplay]

const breakpoints = {
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  992: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1920: {
    slidesPerView: 4,
    spaceBetween: 150,
  },
}
</script>
