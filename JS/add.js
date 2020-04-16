'use strict'
var rate;
var rate2;
var txt;
var st;
function myFunction() {
  rate= confirm("How about rating our service then");
  if (rate) {
    rate2= prompt("Thank you, please rate us out of 5");
    
    while(isNaN(rate2)){
      rate2= prompt("please rate us out of 5");
    }
    while(rate2 > 5 || rate2 < 1 ){
      /* for strings : || rate2 >=  "&#57" || rate2 <=  "&#49" */
      rate2= prompt("please give a rate between 1 and 5");
    }
    if(rate2>=4 && rate2<=5){
      txt = "Awesome, thank you";
    }
    else if(rate2>=2 && rate2<=3){
      txt = "We will do our best";
      
    }
    else if(rate2>=0 && rate2<=1){
      txt = "We will do our best";
      myFunction2();
    }
    document.getElementById("demo").innerHTML = txt;

  } 
  else {
    txt = "You pressed Cancel!";
  }
}
function myFunction2() {
  rate= confirm("Would you mind giving us some feedback?");
  if (rate) {
    prompt("Thank you, we care about your feedback")
    txt = "Thank you for your time, we appreciate it";
  } else {
    txt = "Thank you!";
  }
  document.getElementById("demo").innerHTML = txt;
}
function changeText(value) {
    var div = document.getElementById("div");
    var text = "";

    if (value == 1) text += "Small:3JOD | Medium:4JOD | Large:5JOD";
    if (value == 2) text += "Nachos: 5JOD";
    if (value == 3) text += "Soda: 1.5JOD | Water: 1JOD | Coffee: 2.7JD";

    div.innerHTML = text;
}
function set(){
  st = prompt("How many tickets you want?");
  pnt(st);
}
function pnt(a){
  var tickets= " ";
  for(var i=1 ; i<= st ; i++){
    tickets += '<img class="try" src="https://previews.123rf.com/images/alena08/alena081803/alena08180300059/97699156-cinema-ticket-movie-ticket-template-isolated-on-white-background-vector.jpg"  >' 
   
  }
   return  document.write(tickets);
}

