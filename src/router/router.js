import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore.js'
import Home from '../view/HomeView.vue'
import Register from '../view/RegisterView.vue'
import LogIn from '../view/LogInView.vue'

const requireAuth = async (to, from, next) => {

    const useStore = useUserStore()

    const user = await useStore.currentUser()

    if (user) {
        next()
    } else {
        next('/login')
    }
}
const routes = [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/register', component: Register },
    { path: '/login', component: LogIn },
    // { path:, component:},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router