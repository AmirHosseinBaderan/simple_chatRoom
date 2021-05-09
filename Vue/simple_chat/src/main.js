import Vue from 'vue'
import App from './App.vue'

import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')