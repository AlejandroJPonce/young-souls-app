<script>
import { defineComponent } from "vue";
import GhostsLoading from "/src/basics/GhostsLaoding.vue";
export default defineComponent({
  name: "product",
  components: {
    GhostsLoading,
  },
  setup() {
    return {};
  },
});
</script>

<template>

  <!-- <GhostsLoading /> -->

  <div id="product-section-grid">
    <div id="main-product-box" class="product-description-box p-3">
      <div id="product-image">
        <div>
          <img
            class="main-product-image"
            src="../../../public/images/prueba2.jpg"
            alt=""
          />
        </div>
        <div class="images-Row">
          <div class="sub-image-box">
            <img
              class="sub-image"
              src="../../../public/images/prueba2.jpg"
              alt=""
            />
          </div>
          <div class="sub-image-box">
            <img
              class="sub-image"
              src="../../../public/images/ropa.webp"
              alt=""
            />
          </div>
          <div class="sub-image-box">
            <img
              class="sub-image"
              src="../../../public/images/prueba2.jpg"
              alt=""
            />
          </div>
          <div class="sub-image-box">
            <img
              class="sub-image"
              src="../../../public/images/prueba2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="product-description" class="product-description-section p-4">
        <div class="product-description-header">
          <div class="sub-boxes">
            <span class="span-styled">Men's Shirt</span>
          </div>
          <div class="sub-boxes">
            <span class="fs-title fw-bold">PS Basics Mens Reece</span>
          </div>

          <div class="stars-rating">
            <div class="rating">
              <input type="radio" class="clr1" style="--c: #ff9933" />
              <input type="radio" class="clr1" style="--c: #ff9933" />
              <input type="radio" class="clr1" style="--c: #ff9933" />
              <input type="radio" class="clr1" style="--c: #ff9933" />
              <input type="radio" class="clr1" style="--c: #ff9933" />
            </div>
            <div>
              <span class="fw-bold">0,0</span>
            </div>
            <div>
              <span class="fw-light text-secondary">( 0 Reviwes )</span>
            </div>
          </div>

          <div class="sub-boxes">
            <span class="fs-4 fw-bolder">$ 23,12</span>
          </div>
          <div class="sizes-section">
            <div>
              <span class="fw-normal fs-4">Size</span>
            </div>
            <div class="sizes">
              <div class="size"><span class="fw-normal fs-4">S</span></div>
              <div class="size"><span class="fw-normal fs-4">M</span></div>
              <div class="size"><span class="fw-normal fs-4">L</span></div>
              <div class="size"><span class="fw-normal fs-4">XL</span></div>
            </div>
          </div>
        </div>

        <div style="width: 100%">
          <b-tabs content-class="mt-3" fill>
            <b-tab title="Details" active>
              <p>Product Details</p>
            </b-tab>
            <b-tab title="Care Guide">
              <p>Care product deatils</p>
            </b-tab>
            <b-tab title="Fabric & Fit">
              <p>Fabric and fit details</p>
            </b-tab>
          </b-tabs>
        </div>

        <div class="sub-boxes buttons-box">
          <button style="width: 100%" class="btn btn-dark py-3">
            <span>Checkout Now</span>
          </button>
          <button
            style="width: 100%"
            type="button"
            class="btn btn-outline-dark py-3"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.sizes-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
}

.sizes {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.size {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  width: 24%;
  min-height: 60px;
  border-radius: 10px;
}

.size:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}

.fs-title {
  font-size: 55px;
}

.product-description-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
}

button {
  font-size: 20px !important;
}

.span-styled {
  font-size: 22px !important;
}

.span-product-title {
  font-size: 53px !important;
}
.span-product-price {
  font-size: 43px !important;
}

.stars-rating {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

.rating {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  padding: 0 0 10px 0;
  gap: 4px;
}

.rating input {
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
}

.rating input::before {
  content: "\f005";
  position: absolute;
  font-family: fontawesome;
  font-size: 24px;
  color: #595959;
  transition: 0.5s;
}

.rating input:hover ~ input::before,
.rating input:hover::before,
.rating input:checked ~ input::before,
.rating input:checked::before {
  color: var(--c);
}

#product-section-grid {
  display: grid;
  grid-template-areas: "product-image product-description";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
}

.product-description-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.sub-boxes {
  width: 100% !important;
  display: flex;
  align-items: self-start;
  flex-direction: column;
  gap: 15px;
}

.product-description-box {
  grid-area: "mian-box";
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

#product-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.main-product-image {
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  object-fit: cover;
}

.sub-image-box {
  max-width: 25%;
  max-height: auto;
  cursor: pointer;
}

.sub-image {
  width: 100%;
  border-radius: 10px;
  min-height: 200px;
  object-fit: cover;
  min-width: 25% !important;
}

.images-Row {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 1300px) {
  .buttons-box {
    margin-top: 20px;
  }
}
</style>
