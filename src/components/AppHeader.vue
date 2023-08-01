<script>
import { store } from '../assets/store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <nav class="flex justify-between text-center text-white bg-slate-900 py-4 px-6 shadow w-full">
            <router-link to="/">
                <a href="http://localhost:3000/"><button
                        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Home</button></a>
            </router-link>
            <div v-if="!this.store.auth" class="flex gap-3">
                <router-link to="/login">
                    <button
                        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </router-link>
                <router-link to="/register">
                    <button
                        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                </router-link>
            </div>
            <router-link v-if="this.store.auth" to="/logout">
                <button
                    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LOGOUT</button>
            </router-link>
        </nav>
    </header>
</template>