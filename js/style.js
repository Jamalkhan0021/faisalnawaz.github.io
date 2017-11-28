var navOn = document.getElementById("menu");
var navigation = document.getElementById("navigation");

navOn.addEventListener('click', function(){
          
  navigation.classList.toggle('onlink');
       
});


navigation.addEventListener('click', function(){
       navigation.classList.remove('onlink');        
        


});


