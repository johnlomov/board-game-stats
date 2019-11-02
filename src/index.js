// import './styles/index.scss';
//
// let multiply = (a, b) => a * b,
//   app = document.querySelector('#result');
//
// app.innerHTML = `2 * 3 = ${multiply(2, 3)}`;

import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  components: { App },
  template: "<App/>"
});
