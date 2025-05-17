import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import axios from 'axios'
import { createPinia } from "pinia"

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')

const api = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api
