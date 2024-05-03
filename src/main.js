import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components'
import { SpeedInsights } from "@vercel/speed-insights/vue"


import routes from '@/pages';

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})
app.component(SpeedInsights.name, SpeedInsights)

app.use(routes).mount('#app')
