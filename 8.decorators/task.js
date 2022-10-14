function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash == hash);
    if (objectInCache) {
      console.log("Из кэша: " + cache[cache.indexOf(objectInCache)].value);
      return "Из кэша: " + cache[cache.indexOf(objectInCache)].value;
    };

    let result = func(...args);
      cache.push({
        hash: hash,
        value: result});
      if (cache.length > 5) {
        cache.shift();
      };

      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
  }
  return wrapper;
};




function debounceDecoratorNew(func) {
  let timerId;
  let firstRunFlag = true;

  function wrapper(...args) {
    if (firstRunFlag) {
      wrapper.allCount = 1;
      wrapper.count = 1;
      firstRunFlag = false;
      f.apply(this, args)
      return ;
    }

    clearTimeout(timerID);
    wrapper.allCount += 1;
    timerID = setTimeout( () => {
        f.apply(this, args);
        wrapper.count += 1;
    }, ms);
  }
};