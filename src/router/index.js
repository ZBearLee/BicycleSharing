import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import Home from '@/pages/home/Home'
import SpecialCar from '@/pages/specialcar/SpecialCar'
import FreeRide from '@/pages/freeride/FreeRide'
import Message from '@/pages/message/Message'
import My from '@/pages/my/My'
import Setting from '@/pages/setting/Setting'
import MyCard from '@/pages/my/MyCard'
import MyInvite from '@/pages/my/MyInvite'
import MyRute from '@/pages/my/MyRute'
import MyWallet from '@/pages/my/MyWallet'
import Shopping from '@/pages/my/Shopping'
import FriendAccount from '@/pages/my/FriendAccount'
import VehicleFailure from '@/pages/service/VehicleFailure'
import Complain from '@/pages/service/Complain'
import UpReport from '@/pages/service/UpReport'
import OtherProblem from '@/pages/service/OtherProblem'
import Address from '@/pages/setting/Address'
import CheckVersion from '@/pages/setting/CheckVersion'
import AboutUs from '@/pages/setting/AboutUs'
import UserProtocol from '@/pages/setting/UserProtocol'
import Deposit from '@/pages/setting/Deposit'
import Recharge from '@/pages/setting/Recharge'
import Customer from '@/pages/customer/Customer'
import Fee from '@/pages/customer/Fee'
import Charging from '@/pages/customer/Charging'
import Clock from '@/pages/customer/Clock'
import Authenticate from '@/pages/customer/Authenticate'
import Monthcard from '@/pages/customer/Monthcard'
import Personalcount from '@/pages/customer/Personalcount'
import Aboutuse from '@/pages/customer/Aboutuse'
import Aboutservice from '@/pages/customer/Aboutservice'


//后台路由
import AdminIndex from '@/manage/AdminIndex'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    //前台展示路由
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/specialcar',
      name: 'SpecialCar',
      component: SpecialCar
    },
    {
      path: '/my',
      name: 'My',
      component(resolve) {
        require.ensure(['@/pages/my/My.vue'], () => {
          resolve(require('@/pages/my/My.vue'))
        })
      },
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/freeride',
      name: 'FreeRide',
      component: FreeRide
    },
    //设置
    {
      path: '/setting',
      name:'Setting',
      component: Setting,
    },
    {
      path: '/address',
      name:'Address',
      component: Address,
    },
    {
      path: '/checkversion',
      name:'CheckVersion',
      component: CheckVersion,
    },
    {
      path: '/aboutus',
      name:'AboutUs',
      component: AboutUs,
    },
    {
      path: '/userprotocol',
      name:'UserProtocol',
      component: UserProtocol,
    },
    {
      path: '/deposit',
      name:'Deposit',
      component: Deposit,
    },
    {
      path: '/recharge',
      name:'Recharge',
      component: Recharge,
    },
    //客服中心
    {
      path: '/customer',
      name:'Customer',
      component: Customer,
    },
    {
      path: '/fee',
      name:'Fee',
      component: Fee,
    },
    {
      path: '/charging',
      name:'Charging',
      component: Charging,
    },
    {
      path: '/clock',
      name:'Clock',
      component: Clock,
    },
    {
      path: '/authenticate',
      name:'Authenticate',
      component: Authenticate,
    },
    {
      path: '/monthcard',
      name:'Monthcard',
      component: Monthcard,
    },
    {
      path: '/personalcount',
      name:'Personalcount',
      component: Personalcount,
    },
    {
      path: '/aboutuse',
      name:'Aboutuse',
      component: Aboutuse,
    },
    {
      path: '/aboutservice',
      name:'Aboutservice',
      component: Aboutservice,
    },
    //个人中心
    {
      path: '/mycard',
      name: 'MyCard',
      component: MyCard
    },
    {
      path: '/myinvite',
      name: 'MyInvite',
      component: MyInvite
    },
    {
      path: '/myrute',
      name: 'MyRute',
      component: MyRute
    },
    {
      path: '/mywallet',
      name: 'MyWallet',
      component: MyWallet
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/friendaccount',
      name: 'FriendAccount',
      component: FriendAccount
    },
    //我的消息
    {
      path: '/message',
      name: 'Message',
      component(resolve) {
        require.ensure(['@/pages/message/Message.vue'], () => {
          resolve(require('@/pages/message/Message.vue'))
        })
      },
      meta: {
        requireAuth: true
      }
    },
    //登录
    {
      path: '/login',
      name: 'Login',
      component(resolve) {
        require.ensure(['@/components/Login.vue'], () => {
          resolve(require('@/components/Login.vue'))
        })
      }
    },
    {
      path: '/register',
      name: 'Register',
      component(resolve) {
        require.ensure(['@/components/Register.vue'], () => {
          resolve(require('@/components/Register.vue'));
        });
      }
    },
    {
      path: '*',
      component(resolve) {
        require.ensure(['@/components/NotFound.vue'], () => {
          resolve(require('@/components/NotFound.vue'));
        });
      },
      hidden: true
    },
    //后台管理路由
    {
      path: '/admin',
      name: 'AdminIndex',
      component: AdminIndex
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router