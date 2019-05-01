import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueCodemirror from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
import 'font-awesome/css/font-awesome.css'

import CodeArea from './components/CodeArea'
Vue.component("codearea",CodeArea)

// import 'codemirror/theme/tomorrow-night-bright.css'
Vue.use(VueCodemirror, { 
  options: {
    // theme: 'tomorrow-night-bright', 
    mode: "javascript",
    tabSize: 4,
    lineNumbers: true,
    line: true
  },
  events: ['scroll']
} )


import "bootstrap/dist/css/bootstrap.min.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
