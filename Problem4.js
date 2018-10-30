var array1=['one plus' , ' Xiaomi', 'Realme'];

var array2=['Apple','Google pixel','Samsung'];


var result=[];

function join(array1,array2,n)
{
	if(result.length==0)
	{
	   for(var i=0;i<n;i++)
	     {
			result[i]=array1[i];

	     }
	}
	if(result.length==array1.length)
	{
	   for(var i=0;i<array2.length;i++)
	    {
           result[n+i]=array2[i];
        }
    }
   
   console.log(result);
}

join(array1,array2,array1.length);
