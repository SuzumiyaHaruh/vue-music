import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/recommend'
    },
    {
        path: '/recommend',
        name: 'recommend',
        component: () => import(/* webpackChunkName: "about" */ '../views/Recommend')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "about" */ '../views/Search')
    },
    {
        path: '/singer',
        name: 'singer',
        component: () => import(/* webpackChunkName: "about" */ '../views/Singer'),
        children: [
            {
                path: ':id',
                component: () => import(/* webpackChunkName: "about" */ '../views/Singer-detail'),
            }
        ]
    },
    {
        path: '/top-list',
        name: 'top-list',
        component: () => import(/* webpackChunkName: "about" */ '../views/TopList')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
