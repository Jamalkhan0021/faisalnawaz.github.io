var el = document.getElementById("menu");
var i = 0;

el.addEventListener('click', function(){
     var x = document.getElementById("navigation");
     
      if(i%2==0)  {
       x.style.display = "block";
        }

        else{

        x.style.display = "none";
        
        }

   i++;
});

