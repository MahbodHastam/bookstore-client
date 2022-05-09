<template>
  <div
    :class="`
      shadow-xl shadow-gray-300
      max-w-md
      mx-auto
      group
      flex justify-center flex-col
      ${isSmall ? `
      bg-white
        -mt-14
        rounded-xl
      ` : `
        bg-gradient-to-b
        from-slate-200
        via-slate-100
        to-white
        p-4
        rounded-lg
      `}
    `"
  >
    <div
      :class="`
        relative
        transition-all
        overflow-hidden
        h-64
        self-center
        ${isSmall ? `
          rounded-t-xl
          w-full
        ` : `
          -mt-14
          rounded-lg
          w-11/12
          group-hover:scale-105
          shadow-gray-300
          shadow-[0_-10px_15px_-9px,0_4px_15px_3px]
        `}
      `"
    >
      <img
        :src="props.book.cover"
        :alt="props.book.title + ' cover'"
        :class="`
          w-full
          h-64
          transition-all
          object-cover
          ${isSmall ? `
            rounded-t-xl
            duration-300
            group-hover:scale-110
          ` : `
            rounded-lg
            duration-500
            group-hover:scale-105
          `}
        `"
      />
      <div v-if="isSmall" class="absolute top-3 right-3 h-12 w-full flex items-center justify-start gap-2">
        <span v-if="!props.book.free" class="rounded-full bg-black text-amber-600 bg-opacity-60 px-3 py-1 text-sm">
          <i class="bx bxs-lock"></i>
        </span>
        <span class="rounded-full bg-black text-primary-200 bg-opacity-60 px-3 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <i class="bx bxs-book-content"></i>
          {{ props.book.attributes.pages }}
          صفحه
        </span>
      </div>
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
          v-if="!isSmall"
        >
          <UserGroupIcon class="w-4" />
        </button>
        <button
          :class="`
            space-s-1
            px-4
            py-2
            rounded-full
            transition-all
            bg-primary-600
            text-primary-100
            bg-opacity-95
            hover:bg-opacity-100 hover:text-primary-50
            ${isSmall ? 'text-xs' : 'text-sm'}
          `"
        >
          <EyeIcon class="w-4 inline-block" />
          <span> شروع به خواندن </span>
        </button>
      </div>
    </div>
    <div :class="`
      py-3 px-4
      ${isSmall ? `
        bg-white -mt-2 z-10 rounded-xl
      ` : ``}
    `">
      <a
        href="#"
        :class="`
          transition-colors
          text-slate-800 hover:text-slate-600
          ${isSmall ? '' : 'text-xl'}
        `"
      >
        <p class="truncate">
          {{ props.book.title }}
        </p>
      </a>
      <div v-if="!isSmall" class="flex flex-row justify-around items-center mt-6">
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
  small: {
    type: Boolean,
    default: false,
  },
})

const isSmall = props.small
</script>
