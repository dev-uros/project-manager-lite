import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './style.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: 'none',
})
app.mount('#app')
