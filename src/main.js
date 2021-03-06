import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

let app = null

// wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {
	// init app if nt already created
	if(!app){
		app = new Vue({
		  router,
		  render: h => h(App)
		}).$mount('#app')
	}
})


