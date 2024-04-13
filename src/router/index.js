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
        /*把下面子页面都显示在/home页面的主内容区*/
        children: [
            /*会员登记*/
            {
                /*子页面路径是和父路径做拼接*/
                path: '',
                component: () => import('@/views/vipSign/vipSign'),
            },
            {
                path: 'login',
                component: () => import('@/views/login/login'),
            },
        ]
    },

];

export default routes;
