import Vue from 'vue';
import Router from 'vue-router'; 
import Landing from './../components/landing.vue';
import GuestList from './../components/guestList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GuestList',
      component: GuestList
    },

    {
      path: '/new-guest',
      name: 'Landing',
      component: Landing
    }
  ]
})