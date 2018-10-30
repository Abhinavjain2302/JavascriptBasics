var array=['a','b','c','d','a','b','c','d'];
var x;

var count={ 
	        'a':0,
	        'b':0,
	        'c':0,
	        'd':0
	      }


for(var i=0;i<array.length;i++)
{
	for(x in count)
	  {
		  if(array[i]==x)
		  {
			  count[x]=count[x]+1;
		  }
	  }
}

for(x in count)
  {
    console.log("Frequency of "+ x + " is "+ count[x]);
  }