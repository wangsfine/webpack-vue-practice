import './styles/global.less';
import 'view-design/dist/styles/iview.css';
import IView from 'view-design';
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue';
import components from './components';


Vue.use(VueRouter);
Vue.use(IView);
Vue.use(components);
const vm = new Vue({
    router,
    render(h) {
        return h(App);
    }
});
vm.$mount('#app');