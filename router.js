import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from './src/components/AppLogin.vue'
import AppLogout from './src/components/AppLogout.vue'
import AppHome from './src/components/AppHome.vue'
import AppRegister from "./src/components/AppRegister.vue"


const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/login',
        name: 'Login',
        component: AppLogin,
    },
    {
        path: '/logout',
        name: 'Logout',
        component: AppLogout,
    },
    {
        path: '/register',
        name: 'Register',
        component: AppRegister,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router