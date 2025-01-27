import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/views/homepage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    }, {
        path: '/getRide',
        name: 'getRide',
        component: HomePage,
    }, {
        path: '/about',
        name: 'About',
        component: HomePage,
    },{
        path: '/contact',
        name: 'Contact',
        component: HomePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
