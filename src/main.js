import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'
import App from './App.vue'

import Vum from './vum.js'

import index from './view/secret/posts/index.vue'
import posts from './view/secret/posts/posts.vue'
import discover from './view/secret/discover/discover.vue'
import message from './view/secret/message/message.vue'
import related from './view/secret/related/related.vue'
import user from './view/secret/user/user.vue'
import one from './view/secret/posts/one.vue'
import all from './view/secret/posts/all.vue'
import hot from './view/secret/posts/hot.vue'
import pay from './view/secret/posts/pay.vue'
import comment from './view/secret/related/comment.vue'
import remind from './view/secret/related/remind.vue'
import smessage from './view/secret/related/smessage.vue'
import friends from './view/secret/related/friends.vue'
import myuser from './view/secret/myuser/myuser.vue'




Vue.use(Router);
Vue.use(Vum);

let router = new Router({
    routes:[
        {
            path:'/',
            name:'index',
            component:index,

        },
        {
            path:'/myuser',
            name:'myuser',
            component:myuser,
        },
        {
          path:'/one',
            name:'one',
            component:one
        },
        {
            path:'/all',
            name:'all',
            component:all
        },
        {
            path:'/hot',
            name:'hot',
            component:hot
        },
        {
            path:'/pay',
            name:'pay',
            component:pay
        },
        {
            path:'/posts',
            name:'posts',
            component:posts,

        },
        {
            path:'/discover',
            name:'discover',
            component:discover
        },
        {
            path:'/message',
            name:'message',
            component:message
        },
        {
            path:'/smessage',
            name:'smessage',
            component:smessage
        },
        {
            path:'/remind',
            name:'remind',
            component:remind
        },
        {
            path:'/comment',
            name:'comment',
            component:comment
        },
        {
            path:'/friends',
            name:'friends',
            component:friends
        },
        {
            path:'/related',
            name:'related',
            component:related,




        },
        {
            path:'/user',
            name:'user',
            component:user
        }
    ]
});



new Vue({
    el:'#app',
    router,
    template: '<App/>',
    components: {App}
}).$mount('#app');

Vum.router(router);

FastClick.attach(document.body);