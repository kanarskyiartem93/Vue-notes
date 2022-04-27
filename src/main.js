import {createApp} from 'vue'
import App from './App.vue'
import '@/assets/scss/main.scss'
import routes from "@/routes";
import {store} from "../src/store/index"

const app = createApp(App)

app.use(routes)
app.use(store)
app.mount('#app')
