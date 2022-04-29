<template>
  <div class="relative z-50 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:max-w-7xl lg:pb-28 xl:pb-32 mx-auto">
    <Popover>
      <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav class="relative flex items-center justify-between sm:h-10">
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <Logo text />
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 transition-colors">
                  <span class="sr-only">منو</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden md:block md:mr-10 md:pl-4 md:space-s-8">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="font-bold text-gray-700 hover:text-gray-500 transition-colors">{{ ' ' + item.name + ' ' }}</router-link>
            </div>
          </div>
          <ui-button class="hidden md:block primary">
            ورود به حساب کاربری
          </ui-button>
        </nav>
      </div>

      <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg shadow-gray-300 bg-white ring-1 ring-slate-200 overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <Logo text />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 transition-colors">
                  <span class="sr-only">بستن</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3 space-y-1">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 transition-all">{{ item.name }}</router-link>
            </div>
            <a href="#" class="block w-full px-5 py-3 text-center ont-medium text-primary-600 hover:text-primary-500 transition-colors bg-primary-50 hover:bg-primary-100">ورود به حساب کاربری</a>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { BookOpenIcon } from '@heroicons/vue/solid'
import Logo from '../components/Logo.vue';

const navigation = reactive([
  { name: 'صفحه اصلی', href: '/', },
  { name: 'قابلیت‌ها', href: '/features', },
  { name: 'درباره ما', href: '/about', },
])
</script>
