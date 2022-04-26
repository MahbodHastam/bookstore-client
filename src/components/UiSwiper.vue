<template>
  <div>
    <swiper
      :modules="modules"
      @slide-change="onSlideChange"
      :pagination="{ clickable: true }"
      :space-between="50"
      :scrollbar="{ draggable: true }"
      navigation
    >
      <slot />
    </swiper>
  </div>
</template>

<script>
import { Swiper } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default {
  components: { Swiper },
  props: {
    items: Array,
  },
  setup() {
    const onSlideChange = () => {
      console.log('slide changed')
    }

    return {
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    }
  },
}
</script>
