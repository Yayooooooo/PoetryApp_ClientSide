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
import Edit from "@/components/Edit";
import Paintings from "@/components/Paintings";
import Sculptures from "@/components/Sculptures";
import Painters from "@/components/Painters";
import Sculptors from "@/components/Sculptors";
import Sonnet18 from "@/components/Sonnet18";
import Sonnet98 from "@/components/Sonnet98";
import OnCrime from "@/components/OnCrime";
import OnChildren from "../components/OnChildren";
import Scream from "../components/Scream";
import David from "../components/David";
import Profile from "../components/Profile";

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
      path: '/Painters',
      name: 'Painters',
      component: Painters
    },
    {
      path: '/Sculptors',
      name: 'Sculptors',
      component: Sculptors
    },
    {
      path: '/Paintings',
      name: 'Paintings',
      component: Paintings
    },
    {
      path: '/Sculptures',
      name: 'Sculptures',
      component: Sculptures
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
    },
    {
      path: '/Edit',
      name: 'Edit',
      component:Edit
    },
    {
      path: '/poem/Sonnet 18',
      name: 'Sonnet18',
      component:Sonnet18
    },
    {
      path: '/poem/Sonnet 98',
      name: 'Sonnet98',
      component:Sonnet98
    },
    {
      path: '/poem/On Children',
      name: 'OnChildren',
      component:OnChildren
    },
    {
      path: '/poem/On Crime and Punishment',
      name: 'OnCrime',
      component:OnCrime
    },
    {
      path: '/painting/Scream',
      name: 'Scream',
      component:Scream
    },
    {
      path: '/Profile',
      name:'Profile',
      component:Profile
    },
    {
      path: '/sculptures/David',
      name:'David',
      component:David
    }
  ]
})
