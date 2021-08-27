import './styles/global.less';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import components from './components';

Vue.use(components);
const vm = new Vue({
    router,
    render(h) {
        return h(App);
    }
});
vm.$mount('#app');