<script lang="ts">
import {defineComponent} from 'vue'
import CarouselSection from '../components/CarouselSection.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CarouselSection
  },
  setup() {
    return {

    }
  }
})

</script>

<template>
  <div class="home">
    <CarouselSection />
  </div>
</template>

