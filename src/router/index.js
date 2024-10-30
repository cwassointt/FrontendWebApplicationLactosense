import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home.vue';
import Dashboard from "../components/dashboard.vue";
import Reports from "../components/reports.vue";
import Alerts from "../components/alerts.vue";
import Settings from "../components/settings.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/reports', name: 'Reports', component: Reports },
    { path: '/alerts', name: 'Alerts', component: Alerts },
    { path: '/settings', name: 'Settings', component: Settings }
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