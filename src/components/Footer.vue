<template>
  <footer class="relative px-3 py-6">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center group">
      <div>
        <logo text class="text-start md:text-center" />
      </div>
      <div class="px-6 border-b border-b-slate-200 pb-2 md:pb-0 md:border-transparent">
        <h5 class="text-gray-800 font-bold text-start mb-4 relative after:content-[' '] after:absolute after:-right-1 after:-bottom-2 after:w-10 after:h-6 after:rounded-full after:bg-primary-400 after:bg-opacity-30 after:-z-10 after:transition-all group-hover:after:w-6">
          صــفحه‌ها
        </h5>
        <ul class="text-start ps-4 flex flex-col gap-2 text-slate-900">
          <li><a href="#" class="transition-colors hover:text-slate-700">صفحه اصلی</a></li>
          <li><a href="#" class="transition-colors hover:text-slate-700">کتاب‌های من</a></li>
          <li><a href="#" class="transition-colors hover:text-slate-700">دوستان من</a></li>
          <li><a href="#" class="transition-colors hover:text-slate-700">خرید اشتراک</a></li>
        </ul>
      </div>
      <div class="px-6 pt-2 md:pt-10">
        <ul class="text-start ps-4 flex flex-col gap-2 text-slate-900">
          <li><a href="#" class="transition-colors hover:text-slate-700">درباره کتابستان</a></li>
          <li><a href="#" class="transition-colors hover:text-slate-700">موقعیت‌های شغلی</a></li>
          <li><a href="#" class="transition-colors hover:text-slate-700">حمایت از کتابستان</a></li>
        </ul>
      </div>
      <div class="flex place-items-end mt-10 md:mt-0 px-6">
        <p class="text-slate-700">&copy; تمامی حقوق برای کتابستانـ محفوض است.</p>
      </div>
    </div>
    <div class="absolute w-full md:w-11/12 h-full top-0 right-1/2 translate-x-1/2 -z-50 bg-gradient-to-b from-slate-100 via-slate-50 to-transparent rounded-t-3xl"></div>
  </footer>
</template>

<script setup>
import Logo from './Logo.vue';
//
</script>
