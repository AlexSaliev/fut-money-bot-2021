import Vue from "vue"
import App from "./App.vue"
import router from "./router/router"
import store from "./store/store"
import vuetify from "../plugins/vuetify"
import {initDefaultComponents, initModels} from '../vendor/initApp'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserShield, faCoffee, faMicrochip, faInfo, faPlane, faCartPlus, faDownload, faUsers, faCogs} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//test

require('../bootstrap')

initDefaultComponents(Vue)
initModels(Vue, store, require('./models'))

library.add([faUserShield, faCoffee, faMicrochip, faInfo, faPlane, faCartPlus, faDownload, faUsers, faCogs])
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app")
