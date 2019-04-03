import pinput from './src/input';

/* istanbul ignore next */
pinput.install = function (Vue) {
    Vue.component(pinput.name, pinput);
};

export { pinput };
