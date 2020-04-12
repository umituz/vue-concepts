import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Dashboard from '../pages/Dashboard.vue'
import UserList from '../pages/user/UserList.vue'

const routes = [
    {
        path:'/',
        component:Dashboard,
        name:'dashboard'
    },
    {
        path:'/users',
        component:UserList,
        name:'user.index'
    }
];

export default new VueRouter({
    mode:'history',
    routes:routes
});