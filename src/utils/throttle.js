const throttle = (fn, wait) => {
  let timer = null;
  let create = false;
  let args = [];
  const done = wait ? cb => setTimeout(cb, wait) : requestAnimationFrame;
  const cancel = wait ? clearTimeout : cancelAnimationFrame;
  return (...s) => {
    args = s;
    if (!create) {
      create = true;
      if (timer) cancel(timer);
      timer = done(() => {
        create = false;
        fn(...args);
      });
    }
  };
};

export default throttle;