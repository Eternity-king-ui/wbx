import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/Home')

Vue.use(Router)

const routes = [
    { path: '/home', component: Home }
]

export default new Router({
    routes,
    mode: 'history'
})