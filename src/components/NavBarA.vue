<script lang="ts">
import { defineComponent, ref } from "vue";
import SideBar from '../basics/SideBar.vue'
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NavBarA",
  components: {
    SideBar,
  },

  setup() {

    const router = useRouter()
    const openSide = ref(false)

    function goToLogIn() {
      router.push('/session/LogIn')
    }

    function openSidebar() {
      openSide.value = true
    }

    function hideSide() {
      openSide.value = false
    }

    return {
      openSide,
      openSidebar,
      goToLogIn,
      hideSide
    }
  }

});
</script>

<template>
  <SideBar :open-sidebar="openSide" @hide="hideSide"/>
  <div class="Navbar-base-box">
    <div class="logo-section" @click="$router.push('/')">
      <img class="nav-img" src="../../public/ys-icons/BG-2x-ico.png" alt="" />
      <div class="mx-2">
        <span class="text-dark image-text">Young Souls.</span>
      </div>
    </div>
    <div class="routes-section">
      <div><span class="fw-medium routes-text">Conócenos</span></div>
      <div><span class="fw-medium routes-text">Contáctanos</span></div>
    </div>
    <div class="buttons-section">
      <b-button variant="primary" class="btn-dark mx-3 py-3 fs-6" @click="openSidebar"><span>PRODUCTOS</span></b-button>
      <!-- <b-button variant="primary" @click="goToLogIn" class="btn-dark mx-3 py-3">
        <span>LOG IN</span>
      </b-button> -->
      <i class="bi bi-whatsapp text-dark fs-1 w-icon"></i>
    </div>
    <div class="list-menu-trigger" @click="openSidebar">
      <i class="bi bi-list fs-1" ></i>
    </div>
  </div>
</template>

<style>
.w-icon:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.border {
  border: 1px solid;
}

.routes-text {
  font-size: 20px;
}

.Navbar-base-box {
  padding-left: 48px;
  padding-right: 48px;
  width: 100%;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-section {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.buttons-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav-img {
  width: 45px;
}

.routes-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.image-text {
  font-weight: 900;
  font-size: 24px !important;
}

.btn {
  min-width: 180px !important;
}

.list-menu-trigger {
  display: none;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 700px) {
  .image-text {
    display: none;
  }

  .buttons-section {
    display: none;
  }

  .routes-section {
    display: none;
  }

  .list-menu-trigger {
    display: block;
  }

  .Navbar-base-box {
    padding-left: 18px;
    padding-right: 18px;
  }

}
</style>
