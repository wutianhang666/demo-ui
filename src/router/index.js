const routes = [
    {
        path: '/example',
        component: () => import('@/views/example'),
    },
    //默认访问页面
    {
        path: '/',
        component: () => import('@/views/login/login.vue'),
    },
];

export default routes;
