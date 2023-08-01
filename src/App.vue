<script>
import AppHeader from './components/AppHeader.vue';
import AppChat from './components/AppChat.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './assets/store';

export default {
  components: {
    AppHeader,
    AppChat,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    store.getToken()
  }
}
</script>

<template>
  <div class="flex flex-col justify-between h-screen bg-slate-400">
    <AppHeader />

    <div class="flex h-full">
      <main class="mx-24 text-center flex justify-center items-center w-2/3 h-full bg-slate-400">
        <router-view></router-view>
      </main>
      <AppChat />
    </div>
    <AppFooter />
  </div>
</template>
