import VueRouter from "vue-router";
import Login from '../pages/Login.vue';
import Index from '../pages/Index.vue';

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Index,
    }
];

const router = new VueRouter({
    routes,
})

export default router;