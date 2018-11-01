var fs = require('fs');
var data = fs.readFileSync('data.txt', 'utf8');

var first = require('./first');
var second = require('./second');
var Third = require('./Third');

//console.log( data);
var last = data.length;

for (var i = 0; i < data.length; i++) {

    if ((data.indexOf('Input 1')) < i && i < (data.indexOf('Input 2'))) {

        var String1 = data.slice(data.indexOf('Input 1') + 8, data.indexOf('Input 2') - 1);
        var k = 0;
        var m = 0;

        k = data.indexOf('\n', data.indexOf('Input 1'));
        m = data.indexOf('\n', k + 1);
        first(k, m, i);

        k = m;
        m = data.indexOf('\n', k + 1);
        first(k, m, i)

        k = m;
        m = data.indexOf('\n', k + 1);
        obj = first(k, m, i);
    }

    //for input2 

    if ((data.indexOf('Input 2')) < i && i < (data.indexOf('Input 3'))) {
        var String2 = data.slice(data.indexOf('Input 2') + 8, data.indexOf('Input 3') - 1);

        k = 0;
        m = 0;
        k = data.indexOf('\n', data.indexOf('Input 2') + 8);
        m = data.indexOf('\n', k + 1);
        //console.log(k);
        //	 console.log(m)
        second(k, m, i);

        k = m;
        m = data.indexOf('\n', k + 1);
        var obj2 = second(k, m, i);
    }


    if (i > (data.indexOf('Input 3'))) {
        //console.log(i);
        var String3 = data.slice(data.indexOf('Input 3') + 8, -1);
        //console.log(String3);
        k = 0;
        m = 0;
        k = data.indexOf('\n', data.indexOf('Input 3') + 8);
        m = data.indexOf('\n', k + 1);

        Third(k, m, i);

        k = m;
        m = data.indexOf('\n', k + 1);

        Third(k, m, i)


        k = m;
        m = data.indexOf('\n', k + 1);
        //console.log(k +" "+ m)
        Third(k, m, i)

        k = m;
        // m=data.indexOf('\n',k+1);  
        //console.log(k +" "+ m)
        var obj3 = Third(k, last, i)
    }
}

obj.output1 = obj.output1 + "\n" + "Sales Taxes:" + obj.Sales + "\n";
obj.output1 = obj.output1 + "Total:" + obj.Total;
console.log(obj.output1);

obj2.output2 = obj2.output2 + "\n" + "Sales Taxes:" + obj2.Sales2 + "\n";
obj2.output2 = obj2.output2 + "Total:" + obj2.Total2;
console.log(obj2.output2);

obj3.output3 = obj3.output3 + "\n" + "Sales Taxes:" + obj3.Sales3 + "\n";
obj3.output3 = obj3.output3 + "Total:" + obj3.Total3;
console.log(obj3.output3);
