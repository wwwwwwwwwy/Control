import pbutton from './button/index';
import { pradio } from './radio/index';
import { pcheckbox } from './checkbox/index';
import { pinput } from './input/index';


let components = [
    pbutton,
    pradio,
    // pradiogroup,
    pcheckbox,
    pinput
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
    // pradiogroup,
    pcheckbox,
    pinput
}