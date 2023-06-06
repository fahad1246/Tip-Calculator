//Fahad Mohammed  js comment
// 03/10/2021
//Part d

function validate () {//this creates a function to check if the value is entered in numbers
    var amt = document.getElementById("amt").value;//declares a variable
    if( isNaN(amt))
        document.getElementById("error").innerText="Please only enter Numbers";//this will show an error if the value that is entered is not in numbers
    else 
         document.getElementById("error").innerText="";//if the amount is in mumbers then the error wont show
}

function calculateTip( ) {// this function calculats the tip
    validate( ) ;
    var amt = document.getElementById("amt").value;//this declares the variable
    var tip = amt * 0.20;//this multiplies the amount entered 
    if (tip < 1.00){// if the tip is less then a doller then
        tip = 1.00;//the tip will equal to a dollar
    }
    tip=Math.floor(Math.round(tip*100.0))/100.0;//rounds the tip to the nearest cent
    document.getElementById("tip").value = "$" + tip;
}

function init () {//this runs the calculation for the tip after being clicked
 var btn1 = document.getElementById("btn1");
 btn1.addEventListener("click", calculateTip);// waits for the button to be clicked to start the calculation
}
window.onload = init;// loads windows