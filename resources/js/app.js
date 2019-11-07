require('./bootstrap');
window.Vue = require('vue');

import vuetify from './plugins/vuetify.js'
import sweetalert from './plugins/sweetalert.js'
import router from './router/vue-router.js'
import store from './store/index.js'




Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('login-form', require('./Auth/LoginForm.vue').default);
Vue.component('dashboard-base', require('./Pages/dashboard/dashboard.vue').default)


const app = new Vue({
    vuetify, sweetalert, router, store,
    el: '#app',
});
