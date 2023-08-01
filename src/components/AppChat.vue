<script>
import { store } from '../assets/store';
export default {
    name: 'AppChat',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <aside class="self-end h-full flex justify-between items-center border-x-2 border-slate-800 w-1/3 flex-col">
        <div class="p-6 border-b-2 border-slate-800 w-full text-center">
            <h1 class="font-bold">Utente:</h1>
            <div v-if="store.user">
                <p>{{ store.user.name }}</p>
            </div>
        </div>
        <div class="flex w-full">
            <input class="w-full" type="text">
            <button class="bg-white w-1/4">SEND</button>
        </div>
    </aside>
</template>
