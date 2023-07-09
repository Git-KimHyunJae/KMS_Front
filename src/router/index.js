
import Vue from 'vue'
import VueRouter from 'vue-router'
import reservation from '@/views/reservationAdmin.vue'
import showSales from '../views/showSales.vue'
import userAdmin from '../views/userAdmin.vue'
import Home from '../views/mainHome.vue'

Vue.use(VueRouter)

const route =[
    {
        path:"/home",
        name:'mainHome',
        component:Home
    },
    {
        path:"/reservation",
        name:'reservation',
        component:reservation
    },
    {
        path:"/showSales",
        name:'showSales',
        component:showSales
    },
    {
        path:"/userAdmin",
        name:'userAdmin',
        component:userAdmin
    }
]

const router = new VueRouter({
    mode:'history',
    routes:route

})

export default router