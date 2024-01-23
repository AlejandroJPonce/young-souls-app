<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import CategoryCard from "../components/CategoryCard.vue";
import { useRouter } from "vue-router";

export default defineComponent({

  name: "SideBar",

  components: { CategoryCard },

  props: {
    openSidebar: { type: Boolean, default: true }
  },
  
  emits: [ 'hide' ],


  setup(props, {emit}) {

    const router = useRouter()
    const openSide = computed(() => props.openSidebar)
    const categories = ref([
      {
        image: "../../public/images/ropa.webp",
        title: "Oversize",
        subtitle: "Camisetas",
      },
      {
        image: "../../public/images/ropa.webp",
        title: "Cargo",
        subtitle: "Pantalones",
      },
      {
        image: "../../public/images/ropa.webp",
        title: "Jeans",
        subtitle: "Pantalones",
      },
      {
        image: "../../public/images/ropa.webp",
        title: "YScaps",
        subtitle: "Gorras",
      },
    ]);

    const screenWidth = ref(window.screen.width);

    function showProducts(id: string) {
      router.push('/'+id)
    }

    return {
      categories,
      screenWidth,
      showProducts,
      openSide,
      emit
    }
  },
});


</script>

<template>

  <div :class="openSide === true ? 'sidebar-box-open' : 'sidebar-box'">
    <div class="flex-sidebar-vertical">
      <div class="sidebar-header p-3 py-4">
        <div class="sidebar-title fw-bold fs-3">
          Categorias
        </div>
        <div class="sidebar-close" @click="emit('hide')">
          <i class="bi bi-x-lg fw-bolder fs-3"></i>
        </div>
      </div>
      <div class="sidebar-body p-3">
        <div
            v-for="(category, idx) in categories"
            :key="idx"
            class="category-card-section"
            @click="showProducts(category.title)"

          >
            <CategoryCard
              :image="category.image"
              :title="category.title"
              :subtitle="category.subtitle"
            />
          </div>
      </div>
    </div>
  </div>
</template>

<style>

.sidebar-box {
  width: 414px !important;
  height: 100vh;
  background-color: white;
  top: 0;
  right: -100%;
  position: fixed;
  z-index: 99999;
}

.sidebar-box-open {
  width: 414px !important;
  height: 100vh;
  background-color: white;
  top: 0;
  right: 0;
  position: fixed;
  animation: openSidebarAnimation .5s ease-in-out;
  z-index: 99999;
}

@keyframes openSidebarAnimation {
  0% {
    right: -23%;
  }
  100% {
    right: 0;
  }
}

.flex-sidebar-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.sidebar-body {
  width: 100% !important;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.category-card-section {
  width: 100%;
}

.category-card-section:hover {
  cursor: pointer;
  transform: scale(1.01);
}

.sidebar-close {
  cursor: pointer;
}

</style>
