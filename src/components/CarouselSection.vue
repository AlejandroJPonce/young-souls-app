<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselSection",
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="main-box py-4">
    <b-row class="align-items-center">
      <b-col class="left-column text-start">
        <div class="py-3">
          <span class="left-title-text"
            >Integrate your stack -> automate your work</span
          >
        </div>
        <div class="py-3">
          <span class="left-complement-text"
            >Envolve at the speed and scale of your business with the leader in
            low-code automation</span
          >
        </div>
        <div class="py-3 complement-buttons-box">
          <b-button variant="primary" class="btn-dark py-3 fs-6"><span>VER PRODUCTOS</span></b-button>
          <b-button variant="primary" class="btn-light py-3">
            <i class="bi bi-whatsapp"></i>
            <span class="text-dark mx-2 fs-6">WhatsApp</span>
          </b-button>
        </div>
        <div class="py-3 text-secondary copy">&#169; Young Souls 2024</div>
      </b-col>
      <b-col>
        <div class="image-box">
          <div class="image-section"></div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style>

.main-box {
  padding-left: 48px;
  padding-right: 48px;
}

.left-title-text {
  color: #000;
  font-family: Inter;
  font-size: 96px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.left-complement-text {
  color: #000;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.image-box {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
}

.image-section {
  min-width: 280px;
  width: 100% !important;
  height: 780px;
  background-image: url("../../public/images/prueba2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 35px;
}

.complement-buttons-box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 1000px) {
  .left-title-text {
    font-size: 56px;
  }

  .left-complement-text {
    font-size: 22px;
  }

  .complement-buttons-box {
    flex-direction: column;
    gap: 10px;
  }

  .copy {
    text-align: center;
  }

  .image-section {
    height: 280px;
  }

  .main-box {
    padding-left: 18px;
    padding-right: 18px;
  }

}

</style>
