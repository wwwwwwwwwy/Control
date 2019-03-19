import pbutton from './button/index';
import { pradio, pradiogroup } from './radio/index';


let components = [
    pbutton,
    pradio,
    pradiogroup
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

export default {
    install,
    pbutton,
    pradio,
    pradiogroup
}