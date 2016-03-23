       var word = "bottles";
       var count = 99;
       while (count > 0)  
       		{
       			console.log(count + " " + word + " of beer on the wall") ;
       			document.write(count + " " + word + " of beer on the wall<br><br>");
       			console.log(count + " " + word + " of beer,") ;
       			document.write(count + " " + word + " of beer,<br>");
       			console.log("Take down one, pass it around,") ;
       			document.write("Take down one, pass it around,<br>");
       			count = count - 1;
       			if (count > 0)  
       				{       		       	
       					console.log(count + " "	+ word + " of beer on the wall.") ;
       				} 
       			else 
       				{
       					console.log("No more " + word + " of beer on the wall.") ;
       					document.write("No more " + word + " of beer on the wall.<br>");
       				} 
       		}

       	