function deepObjectCopy (obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  var newObj = obj.constructor();
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepObjectCopy(obj[key]);
    }
  }

  return newObj;
}