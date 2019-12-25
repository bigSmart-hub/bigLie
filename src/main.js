
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import router from './router'
Vue.use(ElementUI) //使用elementUI
Vue.config.productionTip = false
Vue.use(router)

new Vue({
  data:{
    bus:new Vue()
  },
  render: h => h(App),
  router,
}).$mount('#app')

