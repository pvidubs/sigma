import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/help',
            name: 'help',
            component: () => import('../views/HelpView.vue'),
        },
        {
            path: '/buy',
            name: 'buy',
            component: () => import('../views/BuyView.vue'),
        },
        {
            path: '/rent',
            name: 'rent',
            component: () => import('../views/RentView.vue'),
        },
        {
            path: '/sell',
            name: 'sell',
            component: () => import('../views/SellView.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/post',
            name: 'post',
            component: () => import('../views/PostView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
    ],
});

export default router;

