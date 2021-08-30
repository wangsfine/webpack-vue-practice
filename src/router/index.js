import VueRouter from "vue-router";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */'../pages/Login.vue'),
    },
    {
        path: '/',
        name: 'Index',
        component: () => import(/* webpackChunkName: "index" */'../pages/Index.vue'),
    }
];

const router = new VueRouter({
    routes,
})

export default router;