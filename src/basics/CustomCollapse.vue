<script>
import { defineComponent } from 'vue';

export default defineComponent({

    props: {
        isOpen: { type: Boolean, default: false },
        title: { type: String, default: 'Unknown' },
    },  
    
    data() {
        return {
        }
    },

    methods: {        
        handleSection() {
            this.$emit('handle');
        }
    }
})
</script>

<template>
    <div class="collapse-main-box">
        <div class="collapse-header" @click="handleSection()">
            <div>
                <span> {{title}} </span>
            </div>
            <div>
                <i v-if="isOpen" class="bi bi-chevron-up"></i>
                <i v-else class="bi bi-chevron-down"></i>
            </div>

        </div>

        <div v-if="isOpen" class="collapse-body px-2 py-2">
            <slot ></slot>
        </div>
    </div>
</template>

<style>

.collapse-main-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.collapse-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}

</style>