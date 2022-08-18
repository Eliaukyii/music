import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import getVant from './plugins'

const app=createApp(App)
getVant(app)
app.use(router).mount('#app')

