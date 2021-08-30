import SvgIcon from './SvgIcon.vue';

const globalComponents = [
    // custome global component
    SvgIcon
];

export default function install(Vue) {
    for (const component of globalComponents) {
        Vue.component(component.name, component);
    }
}