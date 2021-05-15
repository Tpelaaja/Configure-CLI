import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./components/Home.vue')
        },
        {
            path: '/configurator',
            name: 'cli',
            component: () => import('./components/Generator.vue')
        }
    ]
});
