import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Category from '../pages/category/Category'
import Mine from '../pages/mine/Mine'
import Cart from '../pages/cart/Cart'
import Chart from '../pages/chart/Chart'
import First from '../pages/First/First'
import SecondPage from '../pages/First/Second'


Vue.use(Router)

Router.prototype.goBack = function() {　　
    this.isBack = true;　　
    window.history.go(-1);
}


// 路由按需加载
const home = r => require.ensure([], () => r(require('../pages/home/Home')), 'homedir')
const category = r => require.ensure([], () => r(require('../pages/category/Category')), 'category')
const mine = r => require.ensure([], () => r(require('../pages/mine/Mine')), 'mine')
const cart = r => require.ensure([], () => r(require('../pages/cart/Cart')), 'cart')
const chart = r => require.ensure([], () => r(require('../pages/chart/Chart')), 'chart')
const first = r => require.ensure([], () => r(require('../pages/First/First')), 'first')
const secondPage = r => require.ensure([], () => r(require('../pages/First/Second')), 'secondPage')


const routes = [{
        path: '/',
        name: 'Home',
        component: home
    }, {
        path: '/chart',
        name: 'Chart',
        component: chart
    }, {
        path: '/cart',
        name: 'Cart',
        component: cart
    },
    {
        path: '/category',
        name: 'Category',
        component: category
    }, {
        path: '/mine',
        name: 'Mine',
        component: mine
    },
    {
        path: '/first',
        name: 'First',
        component: first
    },
    {
        path: '/second',
        name: 'second',
        component: secondPage
    }
]
const router = new Router({ routes })


export default router