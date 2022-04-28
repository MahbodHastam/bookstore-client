import { createApp, h } from 'vue'
import 'boxicons/css/boxicons.min.css'
import './index.css'
import App from './App.vue'
import { router } from './router'
import UiButton from './components/UiButton.vue'

const app = createApp(App)

app.component('ui-button', UiButton)

app.use(router)

app.mount('#app')
