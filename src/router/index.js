import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home.vue';

const routes = [
    { path: '/', component: Home }
];

const router = createRouter({
    history: createWebHistory('/FrontendWebApplicationLactosense/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;