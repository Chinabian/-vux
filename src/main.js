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



Vue.use(Router)
Vue.use(Vum)

let router = new Router({
    routes:[
        {
            path:'/',
            name:'index',
            component:index,

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
            path:'/related',
            name:'related',
            component:related
        },
        {
            path:'/user',
            name:'user',
            component:user
        }
    ]
})



new Vue({
    el:'#app',
    router,
    template: '<App/>',
    components: {App}
}).$mount('#app')

Vum.router(router)

FastClick.attach(document.body)