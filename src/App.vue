<template>
  <!-- <router-view></router-view> -->
  <div>
    <header-nav />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import 'swiper/css/bundle'
import HeaderNav from './components/HeaderNav.vue'
</script>

<style>
/* #app {
  color: #2c3e50;
} */
.route-enter-from {
  opacity: 0;
  transform: translateY(100px)
}
.route-enter-active,
.route-leave-active {
  transition: all .2s ease-out
}
.route-leave-to {
  opacity: 0;
  transform: translateY(100px)
}
</style>
