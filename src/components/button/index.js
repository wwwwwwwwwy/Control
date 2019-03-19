import pbutton from './src/button';

/* istanbul ignore next */
pbutton.install = function (Vue) {
    Vue.component(pbutton.name, pbutton);
};

export default pbutton;
