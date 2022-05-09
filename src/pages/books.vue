<template>
  <div class="pb-96 container mx-auto">
    <books-swiper :data="popularBooks">
      <h4 class="text-slate-700 text-2xl">
        <fire-icon class="w-6 h-6 inline-block me-2" />
        کتاب‌های محبوب و پر‌طرفدار
      </h4>
    </books-swiper>
    <books-swiper :data="newestBooks">
      <h4 class="text-slate-700 text-2xl">
        <rss-icon class="w-6 h-6 inline-block me-2" />
        کتاب‌های جدید
      </h4>
    </books-swiper>
    <books-swiper :data="premiumBooks">
      <h4 class="text-slate-700 text-2xl">
        <star-icon class="w-6 h-6 inline-block me-2" />
        کتاب‌های ویژه
      </h4>
    </books-swiper>
  </div>
</template>

<script setup>
import { FireIcon, StarIcon, RssIcon } from '@heroicons/vue/outline'
import BooksSwiper from '../components/BooksSwiper.vue'
import { allBooksRaw, newestBooksRaw, premiumBooksRaw } from '../data'
import { shuffleArray } from '../utils'

const popularBooks = shuffleArray(allBooksRaw)
const newestBooks = shuffleArray(newestBooksRaw)
const premiumBooks = shuffleArray(premiumBooksRaw)
</script>
