<template>
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
        :src="props.book.cover"
        :alt="props.book.title + ' cover'"
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
        <button
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
        </button>
        <button
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
        </button>
      </div>
    </div>
    <div class="py-3 px-4">
      <a
        href="#"
        class="text-xl text-slate-800 hover:text-slate-600 transition-colors"
      >
        {{ props.book.title }}
      </a>
      <div class="flex flex-row justify-around items-center mt-6">
        <span class="rounded-full bg-cyan-100 text-cyan-600 px-3 py-1 text-sm">
          <i class="bx bx-book"></i>
          {{ props.book.attributes.pages }} صفحه
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
          class="rounded-full bg-amber-100 text-amber-600 px-3 py-1 text-sm"
        >
          <i class="bx bx-lock"></i>
          نیازمند حساب
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EyeIcon } from '@heroicons/vue/outline'
import { UserGroupIcon } from '@heroicons/vue/solid'

const props = defineProps({
  book: Object,
})

</script>
