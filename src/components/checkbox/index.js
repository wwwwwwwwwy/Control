import pcheckbox from './src/checkbox';

/* istanbul ignore next */
pcheckbox.install = function (Vue) {
    Vue.component(pcheckbox.name, pcheckbox);
};

export { pcheckbox };
