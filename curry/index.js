var abc = function(a, b, c) {
  return a + b + c;
};

var abcdef = function(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
};

function assert (a, b) {
  if (a !== b) {
    throw new Error();
  }
}



function curry(fn) {
  return (function f(fn, length, arr) {
    return function() {
      var args = Array.prototype.slice.call(arguments);
      return args.length < length ?
        f(fn, length - args.length, arr.concat(args)) :
        fn.apply(null, arr.concat(args));
    };
  })(fn, fn.length, []);
}

function currify(fn) {
  fn.curry = curry(fn);
  return fn;
}

abc = currify(abc);
abcdef = currify(abcdef);

assert(abc.curry('A', 'B', 'C'), 'ABC');
assert(abc.curry('A')('B')('C'), 'ABC');
assert(abc.curry('A', 'B')('C'), 'ABC');
assert(abcdef.curry('A')('B')('C')('D')('E')('F'), 'ABCDEF');
assert(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), 'ABCDEF');
