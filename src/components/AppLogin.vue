<script>
import { store } from '../assets/store';

export default {
    name: 'AppLogin',
    data() {
        return {
            store,
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let login = await store.handleLogin(this.email, this.password)
            if (login) {
                this.$router.push('/')
            }
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="login" class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in</h3>
            <div @v-show="store.errors" class="text-red-500">
                <p v-for="err in store.errors.email">{{ err }}</p>
                <p v-for="err in store.errors.password">{{ err }}</p>
            </div>
            <div>
                <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your
                    email</label>
                <input type="email" v-model="email" name="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@host.com" required="">
            </div>
            <div>
                <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your
                    password</label>
                <input type="password" v-model="password" name="password" id="password" placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required="">
            </div>
            <!-- <div class="flex justify-between"> -->
            <!-- <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                        required="">
                                </div> -->
            <!-- <div class="text-sm ml-3">
                                    <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember
                                        me</label>
                                </div> -->
            <!-- </div> -->
            <!-- <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                                Password?</a> -->
            <!-- </div> -->
            <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login
            </button>
        </form>
    </div>
</template>