import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/ExampleComponent'
Vue.use(Router)
export default new Router({
    routes: [{
        path: '/helo',
        name: 'Hello',
        component: Hello
    }]
})