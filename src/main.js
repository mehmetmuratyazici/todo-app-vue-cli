import { createApp } from 'vue'
import App from './App.vue'
import appHeader from '@/components/AppHeader'

const app = createApp(App)

app.component("app-header", appHeader)

app.config.globalProperties.firebaseUrl = "https://vue-cli-todo-app-efe58-default-rtdb.firebaseio.com"

app.mount('#app')


