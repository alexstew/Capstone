import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import { store } from './store.js';

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

//firebase
import firebase from 'firebase';

// configure router
const router = new VueRouter({
  routes,
  linkExactActiveClass: "nav-item active"
});

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

Vue.prototype.$Chartist = Chartist;


/* eslint-disable no-new */
//main vue app
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
