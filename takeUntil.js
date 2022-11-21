function takeUntil(iterable, predicate) {
  return takeUntilImpl(iterable[Symbol.iterator](), predicate);
}

function takeUntilImpl(iterator, predicate) {
  var nextResolve;
  var isDone = false;
  var nextPromise = new Promise(r => nextResolve = r);
  
  iterator.next().then(function (value) {
    if (!predicate(value)) {
      nextResolve({ done: true });
    } else {
      nextResolve({ done: false, value });
      nextPromise = takeUntil(iterator).next();
    }
  });
  
  return {
    next() {
      return nextPromise;
    }
  };
}