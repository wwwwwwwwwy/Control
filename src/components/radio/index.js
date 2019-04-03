import pradio from './src/radio';
// import pradiogroup from './src/radiogroup';

/* istanbul ignore next */
pradio.install = function (Vue) {
    Vue.component(pradio.name, pradio);
};

// pradiogroup.install = function (Vue) {
//     Vue.component(pradiogroup.name, pradiogroup);
// }

export {
    pradio
    // pradiogroup
};
