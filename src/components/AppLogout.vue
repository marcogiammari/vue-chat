<script>
import { store } from '../assets/store';

export default {
    name: 'AppLogout',
    data() {
        return {
            store,
            email: '',
            password: ''
        }
    },
    methods: {
        async logout() {
            await store.handleLogout()
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="logout" class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Are you sure?</h3>
            <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Logout
            </button>
        </form>
    </div>
</template>