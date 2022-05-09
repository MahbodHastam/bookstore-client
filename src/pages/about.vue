<template>
  <div class="pb-24 container mx-auto text-center">
    <h4 class="text-slate-800 text-3xl font-medium pb-0">
      در حال حاظر...
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-4 my-16 gap-12">

      <div class="flex flex-col items-center">
        <users-icon class="w-14 block text-slate-800 pb-2" />
        <span class="block text-2xl text-slate-900 font-bold animate-pulse">
          {{ '۱۲۳۰' }}
        </span>
        <span class="block text-lg text-slate-700">
          عضو عادی
        </span>
      </div>
      <div class="flex flex-col items-center">
        <star-icon class="w-14 block text-slate-800 pb-2" />
        <span class="block text-2xl text-slate-900 font-bold animate-pulse">
          {{ '۱۷۳' }}
        </span>
        <span class="block text-lg text-slate-700">
          عضو ویژه
        </span>
      </div>
      <div class="flex flex-col items-center">
        <book-open-icon class="w-14 block text-slate-800 pb-2" />
        <span class="block text-2xl text-slate-900 font-bold animate-pulse">
          {{ '۶' }}
        </span>
        <span class="block text-lg text-slate-700">
          کتاب رایگان
        </span>
      </div>
      <div class="flex flex-col items-center">
        <sparkles-icon class="w-14 block text-slate-800 pb-2" />
        <span class="block text-2xl text-slate-900 font-bold animate-pulse">
          {{ '۳' }}
        </span>
        <span class="block text-lg text-slate-700">
          کتاب ویژه
        </span>
      </div>

    </div>
    <h4 class="text-slate-800 text-3xl font-medium">
      در <span class="font-lalezar">کتابستانـ</span>، فعال/موجود هستند.
    </h4>
  </div>
</template>

<script setup>
import { UsersIcon, StarIcon, BookOpenIcon, SparklesIcon } from '@heroicons/vue/solid'
</script>
