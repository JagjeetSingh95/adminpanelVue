import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import { routes } from './routes';
import store from './stores/store';
import { firebaseListener,datalist } from './config/firebaseConfig';

import App from './App.vue';
import Menu from './components/Menu.vue';

Vue.component('side-menu', Menu);
Vue.use(VueRouter);


firebaseListener(authStatusChange);


const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

function authStatusChange(loggedIn, user) {
	if (store) {
		store.commit('AUTH_STATUS_CHANGE');
		if (user) {

		}
	}

}
