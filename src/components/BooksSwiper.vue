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
        <div
          class="
            bg-gradient-to-b
            from-slate-200
            via-slate-100
            to-white
            shadow-xl shadow-gray-300
            rounded-lg
            p-4
            max-w-md
            mx-auto
            group
            flex
            justify-center
            flex-col
          "
        >
          <div
            class="
              relative
              transition-all
              rounded-lg
              -mt-14
              overflow-hidden
              w-11/12
              h-64
              shadow-gray-300
              shadow-[0_-10px_15px_-9px,0_4px_15px_3px]
              group-hover:scale-105
              self-center
            "
          >
            <img
              :src="book.cover"
              :alt="book.title + ' cover'"
              class="
                rounded-lg
                w-full
                h-64
                transition-all
                duration-500
                group-hover:scale-105
              "
            />
            <div
              class="
                absolute
                h-12
                w-full
                gap-2
                flex
                items-center
                justify-end
                flex-row
                bottom-3
                left-3
              "
            >
              <a
                href="#"
                class="
                  rounded-full
                  p-3
                  bg-green-600
                  text-white
                  bg-opacity-80
                  hover:bg-opacity-100
                  transition-all
                "
              >
                <UserGroupIcon class="w-4" />
              </a>
              <a
                href="#"
                class="
                  text-sm
                  space-s-1
                  px-4
                  py-2
                  rounded-full
                  transition-all
                  bg-primary-600
                  text-primary-100
                  bg-opacity-95
                  hover:bg-opacity-100 hover:text-primary-50
                "
              >
                <EyeIcon class="w-4 inline-block" />
                <span> شروع به خواندن </span>
              </a>
            </div>
          </div>
          <div class="py-3 px-4">
            <a
              href="#"
              class="
                text-xl text-slate-800
                hover:text-slate-600
                transition-colors
              "
            >
              {{ book.title }}
            </a>
            <div class="flex flex-row justify-around items-center mt-6">
              <span
                class="rounded-full bg-cyan-100 text-cyan-600 px-3 py-1 text-sm"
              >
                <i class="bx bx-book"></i>
                {{ book.attributes.pages }} صفحه
              </span>
              <span
                v-if="book.free"
                class="rounded-full bg-lime-100 text-lime-600 px-3 py-1 text-sm"
              >
                <i class="bx bx-purchase-tag"></i>
                رایگان
              </span>
              <span
                v-else
                class="
                  rounded-full
                  bg-amber-100
                  text-amber-600
                  px-3
                  py-1
                  text-sm
                "
              >
                <i class="bx bx-lock"></i>
                نیازمند حساب
              </span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { BookOpenIcon, EyeIcon } from '@heroicons/vue/outline'
import {
  HeartIcon,
  SparklesIcon,
  KeyIcon,
  UserGroupIcon,
} from '@heroicons/vue/solid'
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
