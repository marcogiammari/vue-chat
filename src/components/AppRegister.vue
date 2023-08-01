<script>
import { store } from '../assets/store';

export default {
    name: 'AppRegister',
    data() {
        return {
            store,
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    },
    methods: {
        async register() {
            let register = await store.handleRegister(this.name, this.email, this.password, this.passwordConfirmation)
            if (register) {
                this.$router.push('/')
            }
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="register" class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Register</h3>
            <div @v-show="store.registrationErrors" class="text-red-500">
                <p v-for="err in store.registrationErrors.name">{{ err }}</p>
                <p v-for="err in store.registrationErrors.email">{{ err }}</p>
                <p v-for="err in store.registrationErrors.password">{{ err }}</p>
            </div>
            <div>
                <label for="name" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your
                    name</label>
                <input type="text" v-model="name" name="name" id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Name" required="">
            </div>
            <div>
                <label for="emailRegister" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your
                    email</label>
                <input type="emailRegister" v-model="email" name="email" id="email"
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
            <div>
                <label for="passwordConfirm" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Confirm
                    your password</label>
                <input type="password" v-model="passwordConfirmation" name="passwordConfirm" id="passwordConfirm"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required="">
            </div>
            <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register
            </button>
        </form>
    </div>
</template>