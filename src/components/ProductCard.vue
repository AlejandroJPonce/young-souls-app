<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ProductCard",
  props: {
    image: { type: String, required: true },
    title: { type: String, default: 'Unknown' },
    size: { type: String, default: '' }
  },

  setup() {
    return {

    }
  }

})


</script>

<template>
  <div class="product-card-box p-3">
    <div class="">
        <img class="product-card-image" src="../../public/images/ropa.webp" alt="">
    </div>
    <div class="product-card-description p-3">
        <div class="legends px-0">
          <div>
            <span class="fw-semibold">
              {{ title }}
            </span>
          </div>
          <div>
            <span>
              Talla: {{ size }}
            </span>
          </div>
        </div>
        <div class="favorite">
          <b-icon-heart class="icon-config"/>
        </div>
    </div>
  </div>
</template>

<style>
.product-card-box {
  width: 100%;
  min-width: 200px;
  max-width: 393px;
  background-color: #D9D9D926;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.product-card-box:hover {
  transform: scale(1.01);
  cursor: pointer;
}

.product-card-image {
  width: 100%;
  height: 314.475px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 10px;
}

.product-card-description {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.legends {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.icon-config {
  width: 30px; 
  height: 30px;
}
</style>
