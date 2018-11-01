var fs = require('fs');
var data = fs.readFileSync('data.txt', 'utf8');
var Sales2 = 0;
var Total2 = 0;
var output2 = " ";

var second = function (k, m, i) {
  if (k < i && i < m) {

    if ((data.indexOf('chocolates', k)) == i && (data.slice(k, m)).includes('imported')) {
      //console.log(i);
      output2 = output2 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      Sales2 = Sales2 + price * 0.05;
      price = price + price * 0.05;
      Total2 = Total2 + price;
      output2 = output2 + " : " + price;
      //console.log(price);
    }


    if ((data.indexOf('chocolates', k)) == i && (data.slice(k, m)).includes('imported') == false) {
      //console.log(i);
      output2 = output2 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      // Sales=Sales;
      Total2 = Total2 + price;
      output2 = output2 + " : " + price;
      //console.log(price);

    }

    //for imported perfume
    if ((data.indexOf('perfume', k)) == i && (data.slice(k, m)).includes('imported')) {
      //console.log(i);
      output2 = output2 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      Sales2 = Sales2 + price * 0.15;
      price = price + price * 0.15;
      Total2 = Total2 + price;
      output2 = output2 + " : " + price;
      //console.log(price);
      // console.log(output2);


    }
    if ((data.indexOf('perfume', k)) == i && (data.slice(k, m)).includes('imported') == false) {
      //console.log(i);
      output2 = output2 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      Sales = Sales + price * 0.01;
      price = price + price * 0.01;
      Total2 = Total2 + price;
      output2 = output2 + " : " + price;
      //console.log(price);
      //console.log(output2);
    }

  }
  return {
    output2: output2,
    Sales2: Sales2,
    Total2: Total2
  };

}
module.exports = second;
