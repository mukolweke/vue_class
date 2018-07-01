import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import CreateOrder from '../components/CreateOrder'
import ViewOrder from '../components/ViewOrder'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/CreateOrder',
            name: 'CreateOrder',
            component: CreateOrder
        },{
            path: '/ViewOrder',
            name: 'ViewOrder',
            component: ViewOrder
        },
    ]
})
