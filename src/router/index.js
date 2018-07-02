import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import CreateOrder from '../components/CreateOrder'
import ViewOrder from '../components/ViewOrder'
import Comments from '../components/Comments'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Comments',
            name: 'Comments',
            component: Comments
        },
        {
            path: '/CreateOrder',
            name: 'CreateOrder',
            component: CreateOrder,
            children: [
                {
                    path: 'child',
                    component: ViewOrder
                }
            ]
        }]
})
