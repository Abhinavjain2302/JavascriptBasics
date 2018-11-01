var fs = require('fs');
var data = fs.readFileSync('data.txt', 'utf8');
var output1 = " ";
var Sales = 0;
var Total = 0;

var first = function (k, m, i) {
  if (k < i && i < m) {

    //for books
    if ((data.indexOf('book', k)) == i && (data.slice(k, m)).includes('imported')) {
      //console.log(i);
      output = output + data.substring(k, data.indexOf('at', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      Sales = Sales + price * 0.05;
      price = price + price * 0.05;
      Total = Total + price;
      output1 = output1 + " : " + price;
      //console.log(price);
    }


    if ((data.indexOf('book', k)) == i && (data.slice(k, m)).includes('imported') == false) {
      //console.log("here");
      output1 = output1 + data.substring(k, data.indexOf('at', k) - 1);
      // console.log(output);
      //console.log(i);
      var price = Number(data.slice(data.indexOf('at', k) + 2, m));

      output1 = output1 + " : " + price;
      Total = Total + price;
      ///console.log(output1);
      // console.log(price);

    }

    //for chocolate
    if ((data.indexOf('chocolate', k)) == i && (data.slice(k, m)).includes('imported')) {
      //console.log(i);
      output1 = output1 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      Sales = Sales + price * 0.05;
      price = price + price * 0.05;
      output1 = output1 + " : " + price;
      Total = Total + price;
      //console.log(price);
    }


    if ((data.indexOf('chocolate', k)) == i && (data.slice(k, m)).includes('imported') == false) {
      //console.log(i);
      output1 = output1 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));

      output1 = output1 + " : " + price;
      Total = Total + price;
      //	console.log(output1);
      //console.log(price);
    }

    //for music CD
    if ((data.indexOf('music CD', k)) == i && (data.slice(k, m)).includes('imported')) {
      //console.log(i);
      output1 = output1 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at ', k) + 2, m));
      Sales = Sales + price * 0.15;
      price = price + price * 0.15;
      Total = Total + price;
      output1 = output1 + " : " + price;
      //console.log(price);
    }


    if ((data.indexOf('music CD', k)) == i && (data.slice(k, m)).includes('imported') == false) {
      //console.log(i);
      output1 = output1 + data.substring(k, data.indexOf('at ', k) - 1);
      var price = Number(data.slice(data.indexOf('at', k) + 2, m));
      Sales = Sales + price * 0.10;
      price = price + price * 0.10;
      output1 = output1 + " : " + price;
      Total = Total + price;
      ///console.log(price);
      //console.log(output1);
    }
  }

  return {
    output1: output1,
    Sales: Sales,
    Total: Total
  };
}


module.exports = first;