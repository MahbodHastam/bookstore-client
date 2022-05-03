<template>
  <div>
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
      :slides-per-view="3"
      :space-between="150"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      class="!py-3 !px-3"
    >
      <swiper-slide v-for="(book, idx) in books" :key="idx">
        <div class="bg-red-400 shadow-xl shadow-slate-200 rounded-lg py-2 px-4">
          <p class="text-lg text-slate-800 my-3">{{ book.title }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { BookOpenIcon } from '@heroicons/vue/outline'
import { HeartIcon, SparklesIcon, KeyIcon } from '@heroicons/vue/solid'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'
import { Autoplay } from 'swiper'
import Data, { popularBooksRaw, newestBooksRaw, nonFreeBooksRaw } from '../data'

const headingTitleIconClassNames = `w-12 h-12 inline-block -mt-2`

const props = defineProps({
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

const getBooks = (type) => {
  if (type === 'popular') return popularBooksRaw
  if (type === 'newest') return newestBooksRaw
  if (type === 'non-free') return nonFreeBooksRaw
}

const books = getBooks(props.type)

// Swiper
const modules = [Autoplay]
</script>
