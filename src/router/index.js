import Vue from 'vue'
import Router from 'vue-router'
import Menus from '@/pages/Menus'
import Line from '@/components/Line'
import Stacked from '@/components/Stacked'
import Pie from '@/components/Pie'
import PieceHot from '@/components/PieceHot'
import Login from '@/pages/Login'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/menus',
            name: 'menus',
            component: Menus,
            children: [{
                    path: '',
                    component: Home,
                },
                {
                    path: '/line',
                    name: 'line',
                    component: Line,
                },
                {
                    path: '/stacked',
                    component: Stacked,
                },
                {
                    path: '/pie',
                    name: 'pie',
                    component: Pie,
                },
                {
                    path: '/piece_hot',
                    name: 'piece_hot',
                    component: PieceHot,
                },
            ]
        },
    ]
})