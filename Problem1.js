

var Print=function(n)
{
     for(var i=0;i<n;i++)
     {
        process.stdout.write("*");	
     }


}

var space=function(n)
{
	for(var i=0;i<n;i++)
	{
	   process.stdout.write(" ");
	}
	
}



var pyramid=function(n){
   for(var i=0;i<n;i++)
   {
   	   space(n-i);
   	   Print(2*i+1);
   	   space(n-i);
           console.log();
   }

   
}

pyramid(4)
