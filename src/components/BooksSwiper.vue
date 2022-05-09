<template>
  <div>
    <slot />
    <div class="relative w-full">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :breakpoints="breakpoints"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        loop
        class="!py-20 !px-3"
      >
        <swiper-slide v-for="(book, idx) in data" :key="idx">
          <books-swiper-item :book="book" :small="true" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
// import { allBooksRaw } from '../data'
// import { shuffleArray } from '../utils'
import BooksSwiperItem from './BooksSwiperItem.vue'

// const books = shuffleArray(allBooksRaw)

const props = defineProps({
  data: Array,
})

// Swiper
const modules = [Autoplay]

const breakpoints = {
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1920: {
    slidesPerView: 5,
    spaceBetween: 150,
  },
}
</script>

<style scopbed>
.swiper-button-prev {
}
.swiper-button-next {
}
</style>
