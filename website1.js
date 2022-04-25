/*global variable*/
var timeout = 0

/*function for the text field*/
function printdocument(c){
/* if statement for when countdown is complete it sets off to zero*/
    if (c === 0) {
        document.getElementById("text").innerHTML = "Blast Off!!!";
       }
      
    else {
        document.getElementById("text").innerHTML = c;
    }

}

function time(c){
    setTimeout(printdocument, timeout,c);
    timeout= timeout + 1000;
}


function start() {
    document.getElementById("overlay").style.display = "block";

for (var i = 10; i >= 0; i--) {
    document.getElementById("text").innerHTML = i;
    time(i);

   
}
}