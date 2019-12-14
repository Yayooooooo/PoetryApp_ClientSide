import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyPoems from '@/components/MyPoems'
import AllPoems from "@/components/AllPoems"
import Authors from "@/components/Authors";
import Login from "@/components/Login";
import Register from "@/components/Register";
import LookPoem from "@/components/LookPoem";
import PoemForm from "@/components/PoemForm";
import AddPoem from "@/components/AddPoem";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AllPoems',
      name: 'AllPoems',
      component: AllPoems
    },
    {
      path: '/MyPoems',
      name: 'MyPoems',
      component: MyPoems
    },
    {
      path: '/Authors',
      name: 'Authors',
      component: Authors
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/LookPoem',
      name: 'LookPoem',
      component: LookPoem
    },
    {
      path: '/PoemForm',
      name: 'PoemForm',
      component: PoemForm
    },
    {
      path: '/AddPoem',
      name: 'AddPoem',
      component: AddPoem
    }
  ]
})
