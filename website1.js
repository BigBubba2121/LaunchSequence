/*broke everything down into more functions to better read what is all going on not to confuse myself*/
/*global variable*/
var timeout = 0

/*function for the text field*/
function printdocument(c){
/* if statement for when countdown is complete it sets off to zero*/
    if (c === 0) {
        document.getElementById("text").innerHTML = "Blast Off!!!";
       }
/* else if statement for 5 to display warning message */
    else if(c === 5){ 
        document.getElementById("warning").innerHTML = "Warning Less than 1/2 way to launch, time left = " + c + " Seconds Remaining!";
        
        document.getElementById("text").innerHTML = "5";
    }
/* else statement to ensure it displays countdown*/      
    else {
        document.getElementById("text").innerHTML = c;
    }

}
/*time function creating the delay*/
function time(c){
    setTimeout(printdocument, timeout,c);
    timeout= timeout + 1000;
}

/*start function for when button is pressed overlay displays for the text to appear*/
function start() {
    document.getElementById("overlay").style.display = "block";

/*countdown loop*/
for (var t = 10; t >= 0; t--) {
    document.getElementById("text").innerHTML = t;
    time(t);

   
}
}
