import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore.js'
import Home from '../view/HomeView.vue'
import Register from '../view/RegisterView.vue'
import LogIn from '../view/LogInView.vue'
import Editar from '../view/EditarView.vue'
import Perfil from '../view/PerfilUsuarioView.vue'
//aqui se atentica el registro de usuario si esta dentro vas a donde quieras y si no 
//solo a login

const requireAuth = async (to, from, next) => {

    const useStore = useUserStore()
    // una vez se logea pasamos el loadingSession a true y se veria el cargando y hariamos 
    //todo el propceso con el await y su condicion
    useStore.loadingSession = true
    const user = await useStore.currentUser()

    if (user) {
        next()
    } else {
        next('/login')
    }
    //una vez recorra todo este codigo vuelve a false
    useStore.loadingSession = false
}
const routes = [
    { path: '/', component: Home, beforeEnter: requireAuth, name: 'home' },
    { path: '/editar/:id', component: Editar, beforeEnter: requireAuth, name: 'edit' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/login', component: LogIn, name: 'login' },
    { path: '/perfil', component: Perfil, beforeEnter: requireAuth, name: 'perfil' },
    // { path:, component:},,

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router