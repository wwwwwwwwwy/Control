import pradio from './src/radio';

/* istanbul ignore next */
pradio.install = function (Vue) {
    Vue.component(pradio.name, pradio);
};

export default pradio;
