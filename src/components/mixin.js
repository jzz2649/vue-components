import { throttle, debounce } from '../utils'

const delayMixin = {
  data() {
    return {
      tWait: 200,
      dWait: 200
    };
  },
  created() {
    this.throttle = throttle((callback, ...s) => callback(...s), this.tWait);
    this.debounce = debounce((callback, ...s) => callback(...s), this.dWait);
    this.rAFIimit = throttle((callback, ...s) => callback(...s));
    this.rAFOnce = debounce((callback, ...s) => callback(...s));
  }
};

export {
  delayMixin
}