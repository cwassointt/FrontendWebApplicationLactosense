import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/home.vue';
import Aura from '@primevue/themes/aura';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const routes = [
    { path: '/', component: Home }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(PrimeVue, {ripple: true, theme: { preset: Aura } });

app.use(router);
app.mount('#app');
