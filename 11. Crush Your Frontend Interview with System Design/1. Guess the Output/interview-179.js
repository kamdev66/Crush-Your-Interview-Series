// What the result of the following functions call? Is it the same?
const a = function (obj, val) {
  obj.val = {
    a: 1,
    b: 2,
  };

  return obj;
};



const b = function (obj, val) {
  return (obj.val = {
    a: 1,
    b: 2,
  });
};

a({}, 'val');
b({}, 'val');