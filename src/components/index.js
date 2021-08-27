import {
    Button,
    Input,
    Row,
    Col,
    Form,
    FormItem,
} from 'view-design';
import 'view-design/dist/styles/iview.css';

const globalComponents = [
    // iview
    Button,
    Input,
    Row,
    Col,
    Form,
    FormItem,
    // custome global component
];

export default function install(Vue) {
    for (const component of globalComponents) {
        Vue.component(component.name, component);
    }
}