import { createRouter, createWebHistory } from 'vue-router'

import Home from '../view/HomeView.vue'
import Register from '../view/RegisterView.vue'
import LogIn from '../view/LogInView.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: LogIn },
    // { path:, component:},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router