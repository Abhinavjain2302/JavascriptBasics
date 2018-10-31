var array1 = [1, 2, 'e', 3, 4, 'a'];
var map = array1.map(function (x) {

  if ((typeof x) == 'number') {
    return x * 2
  }
  else {
    return x;
  }

});

console.log(map);
