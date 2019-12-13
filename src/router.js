import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import searchList from './components/searchList.vue'
import searchList2 from './components/searchList2.vue'
import HomePage from "./components/homePage.vue";
import educationalServices from "./components/educationalServices.vue";
import educationalServices2 from "./components/educationalServices2.vue";
import countryHomePage from "./components/countryHomePage.vue";
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        { path: '/homePage', name: 'home', component: HomePage },
        { path: '/searchList', name: 'searchlist', component: searchList },
        { path: '/searchList2', name: 'searchlist2', component: searchList2 },
        { path: '/educationalServices', name: 'educationalServices', component: educationalServices },
        { path: '/educationalServices2', name: 'educationalServices2', component: educationalServices2 },
        { path: '/', name: 'countryHomePage', component: countryHomePage },
    ]
})
