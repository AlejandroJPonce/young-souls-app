<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import ProductsHeader from "../components/ProductsHeader.vue";
import ProductCard from "../components/ProductCard.vue";
import CustomCollapse from "../basics/CustomCollapse.vue";
import { defineComponent, ref } from "vue";
import { product } from "../types/Product";
import { Oversize } from "../utils/Oversize";
import { Jeans } from "../utils/Jeans";
import { Cargo } from "../utils/Cargo";
import { Caps } from "../utils/Caps";

export default defineComponent({
  components: { ProductsHeader, ProductCard, CustomCollapse },

  data() {
    const products: product[] = [];
    const actualRoute = ref("");
    const openSizes = ref(true);
    const openColors = ref(false);
    const filterSizeValue = ref("");
    const filtered: product[] = [];

    return {
      paramId: this.$route.params.Id,
      products,
      actualRoute,
      openSizes,
      openColors,
      filterSizeValue,
      filtered,
    };
  },

  computed: {},

  methods: {
    getProducts(route: string) {
      switch (route) {
        case "Oversize":
          this.products = [];

          Oversize.forEach((element: product) => {
            this.products.push(element);
          });

          this.filtered = this.products;

          break;

        case "Cargo":
          this.products = [];

          Cargo.forEach((element: product) => {
            this.products.push(element);
          });

          this.filtered = this.products;

          break;

        case "Jeans":
          this.products = [];

          Jeans.forEach((element: product) => {
            this.products.push(element);
          });

          this.filtered = this.products;

          break;

        case "YScaps":
          this.products = [];

          Caps.forEach((element: product) => {
            this.products.push(element);
          });

          this.filtered = this.products;

          break;

        default:
          break;
      }
    },

    handleFilter(section: string) {
      switch (section) {
        case "size":
          this.openSizes = !this.openSizes;
          break;
        case "color":
          this.openColors = !this.openColors;
          break;

        default:
          break;
      }
    },

    filterProducts(filterValue: string) {
      let text = filterValue.trim().toLowerCase();

      if (text.length == 0) {
        return (this.filtered = this.products);
      }

      return (this.filtered = this.products.filter((element: product) => {
        return element?.size?.toString().toLowerCase().includes(text) || "";
      }));
    },

    goToProduct(product: product, param: string) {
      
      this.$router.push(`/${param}/${product.title}`)
      
    }
  },

  watch: {
    filterSizeValue(newValue) {
      this.filterProducts(newValue);
    },
  },

  created() {
    this.getProducts(this.paramId);

    this.$watch("$route.params.Id", (newValue) => {
      this.paramId = newValue;
      this.actualRoute = newValue;
      this.getProducts(newValue);
      this.filterSizeValue = "";
    });
  },
});
</script>
<template>
  <div class="py-3 px-5">
    <ProductsHeader />

    <div id="products-grid">
      <div class="filters">
        <div class="title">
          <span class="fw-bold fs-2">Filters</span>
        </div>

        <CustomCollapse
          title="Tallas"
          class="w-75"
          :isOpen="openSizes"
          @handle="handleFilter('size')"
        >
          <div>
            <ul class="list-group">
              <li class="list-group-item">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="listGroupRadio"
                  v-model="filterSizeValue"
                  value="S"
                  id="firstRadio"
                />
                <label class="form-check-label mt-1" for="firstRadio"
                  >Small (S)</label
                >
              </li>
              <li class="list-group-item">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="listGroupRadio"
                  v-model="filterSizeValue"
                  value="M"
                  id="secondRadio"
                />
                <label class="form-check-label mt-1" for="secondRadio"
                  >Medium (M)</label
                >
              </li>
              <li class="list-group-item">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="listGroupRadio"
                  v-model="filterSizeValue"
                  value="L"
                  id="thirdRadio"
                />
                <label class="form-check-label mt-1" for="thirdRadio"
                  >Large (L)</label
                >
              </li>
              <li class="list-group-item">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="listGroupRadio"
                  v-model="filterSizeValue"
                  value="XL"
                  id="fourthRadio"
                />
                <label class="form-check-label mt-1" for="fourthRadio"
                  >XLarge (XL)</label
                >
              </li>
            </ul>
          </div>
        </CustomCollapse>
      </div>

      <div class="products">
        <div v-for="(product, idx) in filtered" :key="idx" class="px-3">
          <ProductCard
            v-if="product.category === paramId"
            :image="product.image"
            :title="product.title"
            :size="product.size"
            @click="goToProduct(product, paramId)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#products-grid {
  display: grid;
  grid-template-areas: "filters products products";
  grid-template-columns: 360px 1fr;
  grid-template-rows: 1fr auto;
}

.filters {
  grid-area: "filters";
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 25px;
}

.products {
  grid-area: "products";
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
}

.dropdow-header {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-group-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  border: none;
  padding-left: 0;
}

.cursor-pointer {
  cursor: pointer;
}


@media only screen and (min-device-width: 375px) and (max-device-width: 720px) {
  .filters {
    display: none;
  }
  
}
</style>
