var array = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'z'];
var x;

var count = {};
for (var i = 0; i < array.length; i++) {
  if (count[array[i]] == undefined) {
    count[array[i]] = 0;
  }
  p: for (x in count) {
    if (array[i] == x) {
      count[x] = count[x] + 1;
      continue;
    }
    else {
      for (x in count) {
        if (x == array[i])
          continue p;
      }

      count[array[i]] = 1;
    }
  }

}

for (x in count) {
  console.log("Frequency of " + x + " is " + count[x]);
}