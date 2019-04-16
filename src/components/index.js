import pbutton from './button/index';
import { pradio } from './radio/index';
import { pcheckbox } from './checkbox/index';
import { pinput } from './input/index';
import { pcombobox } from './pcombobox/index';

let components = [
    pbutton,
    pradio,
    // pradiogroup,
    pcheckbox,
    pinput,
    pcombobox,
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
    pinput,
    pcombobox,
}