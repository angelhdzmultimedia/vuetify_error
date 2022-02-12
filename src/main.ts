import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createVuetify} from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import * as directives from 'vuetify/lib/directives'
import * as components from 'vuetify/lib/components'

createApp(App)
.use(createVuetify({
    directives,
    components
}))
.use(router)
.mount('#app')
