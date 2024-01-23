<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      paramId: this.$route.params.Id,
    };
  },
  created() {
    this.$watch('$route.params.Id', (newValue) => {
      this.paramId = newValue;
    });
  },
});
</script>

<template>
  <div class="main-box-header p-3 mb-5">
    <div class="legends-box px-5">
      <div class="display-3 fw-bolder"> {{ paramId }} </div>
      <div>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Inicio</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ paramId }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="img-header-box">
      <img
        class="img-header border"
        src="../../public/images/prueba2.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<style>
.main-box-header {
  width: 100%;
  height: 219px;
  flex-shrink: 0;
  background-color: #d9d9d94d;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.br-border {
  border: 2px solid;
}

nav {
  padding: 0 0 0 5px;
}

.legends-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.img-header-box {
  height: 100%;
}

.img-header {
  width: 180.538px;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 15px;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 720px) {
  .img-header-box {
    display: none;
  }
}

</style>
