const routes = [
    // 默认访问页面
    {
        path: '/',
        component: () => import('@/views/login/login.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home'),
    },
];

export default routes;
