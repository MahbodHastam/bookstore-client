import { createApp } from 'vue'
import 'boxicons/css/boxicons.min.css'
import './index.css'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
