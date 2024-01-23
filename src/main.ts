import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Bootstrapvue3 from 'bootstrap-vue-3'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


createApp(App)
.use(Bootstrapvue3)
.use(router)
.mount('#app')
