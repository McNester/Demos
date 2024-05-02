import './assets/main.css'

import { createApp } from 'vue'
import { VueShowdownPlugin } from 'vue-showdown';
import App from './App.vue'
import components from '@/components'

import routes from '@/pages';

const app = createApp(App)

app.use(VueShowdownPlugin, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: false,
  },
});

components.forEach((component) => {
  app.component(component.name, component)
})

app.use(routes).mount('#app')
