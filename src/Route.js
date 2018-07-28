import Vue from 'vue';
import VueRouter from 'vue-router';
import Not from './404.vue';

const Home = () => import('./components/Home.vue')
const Base = () => import('./components/Base.vue')
const Nav = () => import('./components/Nav/Nav.vue')

Vue.use(VueRouter);

const routes = [{
    path:'/',
    component: Home
  },
  {
    path:'/base',
    component:Base,
    children:[
      {
        path: 'nav',
        component: Nav
      }
    ]
  },
  {
    path:'*',
      component: Not
  }];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;