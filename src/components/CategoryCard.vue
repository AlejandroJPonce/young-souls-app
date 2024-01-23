<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryCard",
  props: {
    image: { type: String, required: true },
    title: { type: String, default: 'Unknown' },
    subtitle: { type: String, default: 'Unknown' }
  },
  setup() {
    return {
    };
  },
});
</script>

<template>
  <div class="card-box p-2">
    <img class="card-image-box" src="../../public/images/ropa.webp" alt="">
    <div class="description-box">
        <div class="description-box-title">
            <span class="title">{{ title }}</span>
        </div>
        <div class="description-box-subtitle">
            <span class="subtitle">{{ subtitle }}</span>
        </div>
    </div>
  </div>
</template>

<style>

.card-box {
    width: 100%;
    height: 85px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #D9D9D94D;
    gap: 10px;
}

.card-image-box {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 11px;
    object-fit: cover;
}

.description-box {
    width: 100%;
    text-align: start;
    line-height: 3px;
}

.title {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.subtitle {
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

</style>
