/*global variables*/
var timeout = 0;

/*function for the text field*/
function printdocument(c){

/* if statement for when countdown is complete it plays launch audio*/
    if (c === 0) {
        var audio1 = new Audio('audio/liftoff.wav');
        audio1.play();
        document.getElementById("text").innerHTML = "Blast Off!!!";
    }
    //else if for when hits half way mark creates message overlay
    else if(c === 5){ 
        document.getElementById("warning").innerHTML = "Warning Less than 1/2 way to launch, time left = " + c + " Seconds Remaining!";
        document.getElementById("text").innerHTML = "5";
    }
    //continues countdown 
    else {
        document.getElementById("text").innerHTML = c;
        console.log(c)
    }

}
//timeout creating proper countdown in seconds so it is not instant
function time(c){
    setTimeout(printdocument, timeout,c);
    timeout= timeout + 1000;
}

//start function loop for the countdown as well as countdown audio
function start() {
    var audio = new Audio('audio/countdown.wav');
    audio.play();
    document.getElementById("overlay").style.display = "block";
        for (var i = 10; i >= 0; i--) {
        document.getElementById("text").innerHTML = i;
        time(i);
    }
}

//submit function for the login page to get into the countdown page
function submit() {
    //variables for login and pin
    var checklogin = verifyLogin();
    var checkpin = verifyPin();
        //checks login function is set to true
        if (checklogin == true) {
            //checks pin function is set to true
            if (checkpin == true) {
                //moves over to launch page if succeeds
                space();
            //fails if either is false reloads and resets the page gives alert
            } else {
                alert("Please enter the correct login and passowrd");
                reload();
            }
        //fails if either is false reloads and resets the page gives alert
        } else {
            alert("Please enter the correct login and password");
            reload();
        }
}
//reloads the page
function reload() {
    location.href = 'Websitelogin.html';
}

//transfers to countdown page
function space() {
    location.href = 'Spacewebsite.html';
}

//verify login ensures proper parameters are met to continue to launch 
function verifyLogin(){
//variables for first and last name values, and add both into the final var creating total length
    var i_1 = document.getElementById("first").value;
    var i_2 = document.getElementById("last").value;
    var final = i_1.length + i_2.length;
    //if first length is 0
    if (i_1.length == 0){
        //if last length is 0
        if (i_2.length == 0){
            //returns false stops the continuation to next page.
            return false;
        }
        // returns false stops the continuation to the next page
        return false;
    }
    //checks final length of both names ensures less than 20 characters
    if (final > 20) {
        //ensures there must be an entry in the input field
        if (final == 0) {
            //alerts if no entry in the input field
            alert("Please enter a valid login");
            //stops continuation to next page
            return false;
        }
        //alerts if more than 20 characters
        alert("First and Last name must be less than 20 characters");
        //stops continuation to next page
         return false;
    //if all passes checks allows login to run true
    } else {
        return true;
    }
}

//function for the pin check
function verifyPin(){
    //grabs pin value from input field
    var i_3 = document.getElementById("badge").value;
    //ensures a pin is entered
    if (i_3.length == 0){
        return false;
    }
    //ensures pin is no more than 3 characters
    if (i_3.length > 3) {
        //alerts if more than 3 characters
        alert("Please enter a 3 digit pin number")
         return false;
    } else {
        return true;
    }
}


