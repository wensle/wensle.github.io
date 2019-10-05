import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyCxyiJ97bBVtQtCECvkPNHnEt0wGlnT5AA",
  authDomain: "bootcamp-4972e.firebaseapp.com",
  databaseURL: "https://bootcamp-4972e.firebaseio.com",
  projectId: "bootcamp-4972e",
  storageBucket: "bootcamp-4972e.appspot.com",
  messagingSenderId: "517148968979",
  appId: "1:517148968979:web:4f0b6a58aeb99468b597e6"
};

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
