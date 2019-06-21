import Vue from 'vue';
import Router from 'vue-router'; 
import AddGuest from './../components/addGuest.vue';
import editGuest from './../components/editGuest.vue';
import viewGuest from './../components/viewGuest.vue';
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
      name: 'AddGuest',
      component: AddGuest
    },

    {
      path: '/edit-guest/:id',
      name: 'edit-guest',
      component: editGuest,
      props: true
    },

    {
      path: '/view-guest/:id',
      name: 'view-guest',
      component: viewGuest,
      props: true
    }
  ]
})