var hours = document.getElementById("formGroupExampleInput3").valueAsNumber;
var hourRate = document.getElementById("formGroupExampleInput4").valueAsNumber;
var pointsEarned = document.getElementById("formGroupExampleInput5").valueAsNumber;
var totalPoints = document.getElementById("formGroupExampleInput6").valueAsNumber;
var tankSize = document.getElementById("formGroupExampleInput7").valueAsNumber;
var pricePerGallon = document.getElementById("formGroupExampleInput8").valueAsNumber;
var tipOutput = document.getElementById("tipOutput")
var totalOutput = document.getElementById("totalOutput");

var button1 = document.getElementById("btn1");

button1.addEventListener("click", function() {
 
    const subTotal = document.getElementById("formGroupExampleInput").valueAsNumber;
    const percentage = document.getElementById("formGroupExampleInput2").valueAsNumber;


    let tipAmount = subTotal * percentage;   
    let totalBill = subTotal + tipAmount;


    tipOutput.innerHTML = tipAmount;
    totalOutput.innerHTML = totalBill;
});


// calculateTip();
// console.log(calculateTip());



// calculateTotal();
// console.log(calculateTotal());  





