var fs = require('fs');
var data = fs.readFileSync('data.txt', 'utf8');
var Sales3 = 0;
var Total3 = 0;
var output3 = " ";

var Third = function (k, m, i) {

  if ((k < i && i < m) || m == -1) {
    //console.log("here");
    //for chocolates

    if ((data.indexOf('chocolates', k)) == i && (data.slice(k, m)).includes('imported')) {
      //console.log(i);
      output3 = output3 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      Sales3 = Sales3 + price * 0.05;
      price = price + price * 0.05;
      Total3 = Total3 + price;
      output3 = output3 + " : " + price;
      //console.log(price);
    }


    if ((data.indexOf('chocolates', k)) == i && (data.slice(k, m)).includes('imported') == false) {
      //console.log(i);
      output3 = output3 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      // Sales=Sales;
      Total3 = Total3 + price;
      output3 = output3 + " : " + price;
      //console.log(price);
    }

    //for imported perfume
    if ((data.indexOf('perfume', k)) == i && (data.slice(k, m)).includes('imported')) {
      //console.log(i);
      output3 = output3 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      Sales3 = Sales3 + price * 0.15;
      price = price + price * 0.15;
      Total3 = Total3 + price;
      output3 = output3 + " : " + price;
      //	console.log(price);
    }

    if ((data.indexOf('perfume', k)) == i && (data.slice(k, m)).includes('imported') == false) {
      //console.log(i);
      output3 = output3 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      Sales3 = Sales3 + price * 0.10;
      price = price + price * 0.10;
      Total3 = Total3 + price;
      output3 = output3 + " : " + price;
      // console.log(price);

    }

    //for headache pills
    if ((data.indexOf('headache pills', k)) == i && (data.slice(k, 365)).includes('imported', k)) {
      //console.log(i);
      output3 = output3 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      Sales3 = Sales3 + price * 0.05;
      price = price + price * 0.05;
      Total3 = Total3 + price;
      output3 = output3 + " : " + price;
      //console.log(price);
    }

    if ((data.indexOf('headache pills', k)) == i && (data.slice(k, m)).includes('imported', k) == false) {
      //console.log(i);
      output3 = output3 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      //Sales=Sales

      Total3 = Total3 + price;
      output3 = output3 + " : " + price;
      //console.log(price);
    }
  }
  return {
    output3: output3,
    Sales3: Sales3,
    Total3: Total3
  };
}


module.exports = Third;