const routes = [
    // 默认访问页面
    {
        path: '/',
        // name: 'login',
        component: () => import('@/views/login/login.vue'),
    },
    {
        path: '/sys',
        // name: 'home',
        component: () => import('@/views/home/home'),
        /*把下面子页面都显示在/home页面的主内容区*/
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/homeMain'),
            },
            /*子页面路径是和父路径做拼接*/
            {
                path: 'role',
                component: () => import('@/views/role/role'),
            },
            {
                path: 'menuIndex',
                component: () => import('@/views/menu/menuIndex'),
            },
            {
                path: 'user',
                component: () => import('@/views/user/user'),
            },
            {
                path: 'vipSign',
                component: () => import('@/views/vipSign/vipSign.vue'),
            },
        ]
    },

];

export default routes;
