import './assets/main.css'
import './../index.css'
import store from './store/store'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser ,faLock,faCircleUser ,faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons'


library.add(faUser,faLock,faCircleUser ,faArrowLeft,faArrowRight)

const app = createApp(App)
app.component('font-awesome-icon',FontAwesomeIcon)

app.use(router)
app.use(store)
app.mount('#app')
