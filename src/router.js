import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import searchList from './components/searchList.vue'
import searchList2 from './components/searchList2.vue'
import HomePage from "./components/homePage.vue";
import educationalServices from "./components/educationalServices.vue";
import educationalServices2 from "./components/educationalServices2.vue";
import countryHomePage from "./components/countryHomePage.vue";
import mechanism from "./components/mechanism.vue";
import mechanism1 from "./components/mechanism1.vue";
import mechanism2 from "./components/mechanism2.vue";
import mechanism3 from "./components/mechanism3.vue";
import mechanism4 from "./components/mechanism4.vue";
import mechanism5 from "./components/mechanism5.vue";
import mechanism6 from "./components/mechanism6.vue";
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        { path: '/', name: 'countryHomePage', component: countryHomePage },
        { path: '/homePage/:id', name: 'home', component: HomePage },
        { path: '/searchList/:name', name: 'searchlist', component: searchList },
        { path: '/searchList2', name: 'searchlist2', component: searchList2 },
        { path: '/educationalServices/:proId', name: 'educationalServices', component: educationalServices },
        { path: '/educationalServices2/:name', name: 'educationalServices2', component: educationalServices2 },
        {
            path: '/mechanism/:id', name: 'mechanism', children: [
                {
                    path: '/',
                    name:'mechanism1',
                    component: mechanism1
                },
                {
                    path: '/mechanism2',
                    component: mechanism2
                },
                {
                    path: '/mechanism3',
                    component: mechanism3
                },
                {
                    path: '/mechanism4',
                    component: mechanism4
                },
                {
                    path: '/mechanism5',
                    component: mechanism5
                },
                {
                    path: '/mechanism6',
                    component: mechanism6
                },
            ], component: mechanism
        },
    ]
})
