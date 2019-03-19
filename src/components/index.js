import pbutton from './button/index';
import pradio from './radio/index';


let components = [
    pbutton,
    pradio
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

export default {
    install,
    pbutton,
    pradio
}