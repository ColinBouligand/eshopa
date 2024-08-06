import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import vuetify from '../src/plugins/vuetify'
import router from './router'
import { i18n } from './i18n'


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(vuetify)
app.use(router)
app.use(i18n);

app.mount('#app')
