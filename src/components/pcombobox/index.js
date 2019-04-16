import pcombobox from './src/combobox';

/* istanbul ignore next */
pcombobox.install = function (Vue) {
    Vue.component(pcombobox.name, pcombobox);
};

export { pcombobox };
