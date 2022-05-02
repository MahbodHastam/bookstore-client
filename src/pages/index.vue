<template>
  <div>
    <!-- First section -->
    <section class="relative pt-10 pb-20 lg:pb-0">
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-14 mt-0 lg:mt-8">
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="text-3xl lg:text-4xl text-primary-600 font-bold mb-4">
            با
            <Logo textOnly class="-ml-1" />، 
            ببین و بخوان!
          </h2>
          <p class="text-gray-800 text-lg text-center lg:text-right mb-6 leading-loose indent-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
          <ui-button class="primary-solid lg:ml-auto">
            <CollectionIcon class="w-4 h-4 inline" />
            مشاهده کتاب‌ها
          </ui-button>
        </div>
        <!-- Image -->
        <div class="flex justify-center flex-1 mb-8 lg:mb-0 z-10">
          <img src="/img/Designer-Isometric.svg" alt="An image" class="w-5/6 h-5/6 md:w-full md:h-full">
        </div>
      </div>
      <div class="hidden md:block overflow-hidden from-primary-100 to-transparent bg-gradient-to-b rounded-r-full absolute h-80 w-2/4 top-32 left-0 -z-50"></div>
    </section>

    <DownIcon class="w-12 h-12 -mt-10 animate-bounce text-primary-300 mx-auto cursor-pointer" @click="goTo(secondSection)" />

    <!-- Second section -->
    <section class="relative py-20" ref="secondSection">
      <div class="container flex flex-col lg:flex-row items-center gap-0 lg:gap-14 mt-0 lg:mt-8">
        <!-- Image -->
        <div class="flex justify-center flex-1 mb-8 lg:mb-0 z-10">
          <img src="/img/Laptop-Isometric.svg" alt="An image" class="w-5/6 h-5/6 md:w-full md:h-full">
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="text-3xl lg:text-4xl text-primary-600 font-bold mb-4 lg:-mt-8">
            کتاب‌خواندن بصورت 
            <span class="underline font-extrabold relative">
              آنلاین
              <span class="absolute top-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </span>
            </span>
          </h2>
          <p class="text-gray-800 text-lg text-center lg:text-right mb-6 leading-loose indent-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
          <ui-button class="primary-solid lg:mr-auto">
            <CursorClickIcon class="w-4 h-4 inline" />
            ایجاد حساب کاربری و شروع
          </ui-button>
        </div>
      </div>
      <div class="hidden md:block overflow-hidden from-red-100 to-transparent bg-gradient-to-b rounded-l-full absolute h-80 w-2/4 top-32 right-0 -z-50"></div>
    </section>

    <!-- Pricing section -->
    <section class="relative py-20">
      <div class="container flex flex-col items-center gap-8 my-20">
        <div class="text-center">
          <h3 class="text-primary-600 text-4xl font-bold space-s-4">
            <CreditCardIcon class="w-12 h-12 text-primary-600 inline-block" />
            <span>پلن‌های خرید اشتراک</span>
          </h3>
        </div>
        <div class="grid grid-cols-1 justify-center lg:grid-cols-3 w-full gap-8 pb-8"> <!-- flex flex-wrap  -->

          <div class="w-full px-4 mt-10">
            <div class="border-2 border-slate-200 bg-white rounded-2xl shadow-2xl w-full py-10 px-8 sm:p-12 lg:pt-10 lg:px-6 xl:p-12 md:mt-14 text-center group">
              <h4 class="text-primary-700 text-3xl text-center font-semibold">
                <span class="relative after:transition-all after:content-[' '] after:absolute after:w-2/6 group-hover:after:w-4/6 group-hover:after:h-6 after:h-5 after:bg-primary-300 after:bg-opacity-60 after:bottom-1 after:-right-1 after:rounded-full after:-z-10 z-10">
                  حساب معمولی
                </span>
              </h4>
              <h6 class="text-green-600 space-s-2 my-3 pb-8 border-b border-slate-100">
                <span class="text-sm font-medium">رایگان</span>
              </h6>
              <ul class="flex gap-4 flex-col">
                <li class="font-light">
                  <i class="bx bx-spreadsheet text-slate-700"></i>
                  خواندن ۳ کتاب در هفته
                </li>
                <li class="font-light">
                  <i class="bx bx-book text-slate-700"></i>
                  دسترسی به کتاب‌های رایگان
                </li>
                <li class="font-light">
                  <i class="bx bx-moon text-slate-700"></i>
                  حالت تاریک برای مطالعه در شب
                </li>
                <li class="font-regular">
                  <!-- <i class="bx bx-plus text-slate-900"></i> -->
                  <LightningBoltIcon class="h-4 w-4 text-yellow-500 inline-block" />
                  ۱ هفته امکانات ویژه
                </li>
              </ul>
              <ui-button class="primary-solid shadow-lg shadow-primary-300 block w-full mt-8">
                ایجاد حساب کاربری
              </ui-button>
            </div>
          </div>
          <div class="w-full px-4 mt-10">
            <div class="relative p-0.5 md:mt-7 bg-gradient-to-br from-green-300 via-blue-500 to-indigo-600 w-full rounded-2xl">
              <div class="bg-white rounded-2xl shadow-2xl shadow-indigo-400 w-full py-10 px-8 sm:p-12 lg:pt-10 lg:px-6 xl:p-12 text-center group">
                <h4 class="text-sky-700 text-3xl text-center font-semibold">
                  <span class="relative after:transition-all after:content-[' '] after:absolute after:w-2/6 group-hover:after:w-4/6 group-hover:after:h-6 after:h-5 after:bg-sky-300 after:bg-opacity-60 after:bottom-1 after:-right-1 after:rounded-full after:-z-10 z-10">
                    مادام‌العمر
                  </span>
                </h4>
                <h6 class="text-green-600 space-s-2 my-3 pb-8 border-b border-slate-100">
                  <span class="text-sm font-medium">تومانـ</span>
                  <span class="text-2xl font-semibold">۱۹۰,۰۰۰</span>
                </h6>
                <ul class="flex gap-4 flex-col">
                  <li class="font-light">
                    <i class="bx bx-infinite text-slate-700"></i>
                    خواندن نامحدود کتاب
                  </li>
                  <li class="font-light">
                    <i class="bx bx-book text-slate-700"></i>
                    دسترسی به تمامی کتاب‌ها
                  </li>
                  <li class="font-light">
                    <i class="bx bx-palette text-slate-700"></i>
                    استفاده از قالب‌های نمایشی متفاوت
                  </li>
                  <li class="font-light">
                    <i class="bx bx-group text-slate-700"></i>
                    خواندن گروهی کتاب، با دوستان
                  </li>
                </ul>
                <ui-button class="text-white bg-gradient-to-r from-emerald-500 to-green-400 shadow-lg shadow-green-300 hover:opacity-80 block w-full mt-8">
                  خرید اشتراک
                </ui-button>
              </div>
            </div>
          </div>
          <div class="w-full px-4 mt-10"> <!-- md:w-1/2 lg:w-1/3  -->
            <div class="border-2 border-slate-200 bg-white rounded-2xl shadow-2xl w-full py-10 px-8 sm:p-12 lg:pt-10 lg:px-6 xl:p-12 text-center group">
              <h4 class="text-primary-700 text-3xl text-center font-semibold">
                <span class="relative after:transition-all after:content-[' '] after:absolute after:w-7/12 group-hover:after:w-9/12 group-hover:after:h-6 after:h-5 after:bg-primary-300 after:bg-opacity-60 after:bottom-1 after:-right-1 after:rounded-full after:-z-10 z-10">
                  اقتصادی
                </span>
                <span class="text-sm">
                  (ماهانه)
                </span>
              </h4>
              <h6 class="text-green-600 space-s-2 my-3 pb-8 border-b border-slate-100">
                <span class="text-sm font-medium">تومانـ</span>
                <span class="text-2xl font-semibold">۳۰,۰۰۰</span>
              </h6>
              <ul class="flex gap-4 flex-col">
                <li class="font-light">
                  <i class="bx bx-spreadsheet text-slate-700"></i>
                  خواندن ۱۰ کتاب در هفته
                </li>
                <li class="font-light">
                  <i class="bx bx-book text-slate-700"></i>
                  دسترسی به تمامی کتاب‌ها
                </li>
                <li class="font-light">
                  <i class="bx bx-moon text-slate-700"></i>
                  حالت تاریک برای مطالعه در شب
                </li>
              </ul>
              <ui-button class=" primary-solid shadow-lg shadow-primary-300 block w-full mt-8">
                خرید اشتراک
              </ui-button>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-hidden from-slate-100 via-slate-200 to-transparent bg-gradient-to-t rounded-bl-full absolute h-3/4 w-full inset-0 -z-50"></div>
    </section>

    <!-- Books Swiper -->
    <suspense>
      <BooksSwiper headingTitle="کتاب‌های پر‌طرفدار" type="popular" />
    </suspense>
  </div>
</template>

<script setup>
import { CollectionIcon, CursorClickIcon, ChevronDownIcon as DownIcon, CreditCardIcon, LightningBoltIcon } from '@heroicons/vue/solid'
import { ref } from 'vue';
import BooksSwiper from '../components/BooksSwiper.vue'
import Logo from '../components/Logo.vue'

const secondSection = ref(null)

const goTo = refVariable => {
  const top = refVariable.offsetTop
  window.scrollTo(0, top)
}
</script>
