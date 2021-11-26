import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '../page/GoodsList'
import Cart from '../page/Cart'
import Address from '../page/Address'
import AddressList from '../page/AddressList'
import OrderConfirm from '../page/OrderConfirm'
import OrderSuccess from '../page/OrderSuccess'
import OrderList from '../page/OrderList.vue'
import GoodsDetails from '../page/GoodsDetails'
Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/goodsdetails',
      name: 'GoodsDetails',
      component: GoodsDetails
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/addresslist',
      name: 'AddressList',
      component: AddressList
    },
    {
      path: '/orderconfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orderinfo',
      name: 'OrderSuccess',
      component: OrderSuccess
    },
    {
      path: '/orderlist',
      name: 'OrderList',
      component: OrderList
    }
  ]
})
