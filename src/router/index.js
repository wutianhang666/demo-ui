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
        meta: {title: "首页"},
        /*把下面子页面都显示在/home页面的主内容区*/
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/homeMain'),
                meta: {title: "默认页"},
            },
            /*子页面路径是和父路径做拼接*/
            {
                path: 'role',
                component: () => import('@/views/role/role'),
                meta: {title: "角色管理"},
            },
            {
                path: 'menuIndex',
                component: () => import('@/views/menu/menuIndex'),
                meta: {title: "菜单管理"},
            },
            {
                path: 'user',
                component: () => import('@/views/user/user'),
                meta: {title: "用户管理"},
            },
            {
                path: 'vipSign',
                component: () => import('@/views/vipSign/vipSign.vue'),
                meta: {title: "会员登记"},
            },
        ]
    },

];

export default routes;
