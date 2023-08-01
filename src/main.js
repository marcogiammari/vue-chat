
import { createApp } from 'vue';
import './axios';
import './style.css';
import App from './App.vue';
import 'flowbite';
import VueRouter from '../router';
const app = createApp(App);
app.use(VueRouter)
app.mount('#app');
