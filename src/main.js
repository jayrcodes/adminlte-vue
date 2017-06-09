// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'

import 'font-awesome/css/font-awesome.css'
import 'admin-lte/bootstrap/css/bootstrap.css'
import 'admin-lte/plugins/datatables/dataTables.bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.css'

import 'admin-lte/bootstrap/js/bootstrap.js'
import 'admin-lte/plugins/datatables/jquery.dataTables.js'
import 'admin-lte/plugins/datatables/dataTables.bootstrap.js'
import 'admin-lte/plugins/slimScroll/jquery.slimscroll.js'
import 'admin-lte/plugins/fastclick/fastclick.js'
import './assets/adminlte.js'

Vue.config.productionTip = false
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
