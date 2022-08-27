import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui
import './plugins/element'
import 'element-ui/lib/theme-chalk/index.css';
// import Element from 'element-ui';
// Vue.use(Element, { size: 'small', zIndex: 3000 });
import API from './api/index'
//导入全局样式表
import './assets/css/global.css'


Vue.config.productionTip = false
// Vue.use(Button);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Input);
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$API = API
  }
}).$mount('#app')
