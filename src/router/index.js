import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/index/index.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            component: Index
        }
    ]
})