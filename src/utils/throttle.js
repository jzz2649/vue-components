const throttle = (fn) => {
  let timer = null;
  let create = false;
  let args = [];
  return (...s) => {
    args = s;
    if (!create) {
      create = true;
      if (timer) cancelAnimationFrame(timer);
      timer = requestAnimationFrame(() => {
        create = false;
        fn(...args);
      });
    }
  }
}

export default throttle;