<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'GhostsLoading',
    setup() {
        return {

        }
    }
})

</script>

<template>
    <div class="background-loading">
        <div>
            <img class="ghost-loading-image" src="../../public/ys-icons/BG-2x-ico.png" alt="">
        </div>
    </div>
</template>

<style>

.background-loading {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(122, 122, 122, 0.8);
    z-index: 9999999;
}

.ghost-loading-image {
    width: 50%;
    height: 50%;
    opacity: 80%;
    animation: loading 2s ease-in-out infinite;
}

@keyframes loading {
    0% {
        transform: translateY(-14px);
    }
    50% {
        transform: translateY(14px);
    }
    100% {
        transform: translateY(-14px);
    }
}

</style>