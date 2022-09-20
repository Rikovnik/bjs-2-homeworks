function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash == hash);
    if (!objectInCache) {
      let result = func(...args);
      cache.push({
        hash: hash,
        value: result});
      if (cache.length > 5) {
        cache.shift();
      }

      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    } else {
      console.log("Из кэша: " + cache[cache.indexOf(objectInCache)].value);
      return "Из кэша: " + cache[cache.indexOf(objectInCache)].value;
    }
  }
  return wrapper;
}




function debounceDecoratorNew(func) {

  const decor = (func, ms) => {
    let firstRunFlag = true;

    return function (...args) {
      if(firstRunFlag) {
        func.apply(this. args);
        firstRunFlag = false;
        return;
      }
    }
  }

  const debounceDecorator = (f, ms) => {
    let timerId;

    return function (...args) {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        f.apply(this.args);
        console.timeEnd("time");
      }, ms);
    };
  };
};



function debounceDecorator2(func) {
  const decor = (func, ms) => {

    function wrapper(...args) {
      this.count++;

      let timerId;
      return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
          f.apply(this.args);
          console.timeEnd("time");
        }, ms);
      };
    };

    wrapper.count = 0;
    return wrapper;
  }
}
