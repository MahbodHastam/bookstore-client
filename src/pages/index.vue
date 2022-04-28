<template>
  <div>
    <header-nav />
    <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-12 mt-0 lg:mt-8">
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
        <div class="flex justify-center flex-1 lg:mb-0 z-10">
          <img src="/img/Designer-Isometric.svg" alt="An image" class="w-5/6 h-5/6 md:w-full md:h-full">
        </div>
      </div>
      <div class="hidden md:block overflow-hidden from-primary-100 to-transparent bg-gradient-to-b rounded-r-full absolute h-80 w-2/4 top-32 left-0 -z-50"></div>
    </section>
  </div>
</template>

<script setup>
import { CollectionIcon } from '@heroicons/vue/solid'
import HeaderNav from '../components/HeaderNav.vue'
import Logo from '../components/Logo.vue'
</script>
