var rate;
var rate2;
function myFunction() {
  rate= confirm("How about rating our service then");
  if (rate) {
    rate2= prompt("Thank you, please rate us out of 5");
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

  } else {
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
