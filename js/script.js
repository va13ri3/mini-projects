var subTotal = document.getElementById("formGroupExampleInput").valueAsNumber;
var percentage = document.getElementById("formGroupExampleInput2").valueAsNumber;
var hours = document.getElementById("formGroupExampleInput3").valueAsNumber;
var hourRate = document.getElementById("formGroupExampleInput4").valueAsNumber;
var pointsEarned = document.getElementById("formGroupExampleInput5").valueAsNumber;
var totalPoints = document.getElementById("formGroupExampleInput6").valueAsNumber;
var tankSize = document.getElementById("formGroupExampleInput7").valueAsNumber;
var pricePerGallon = document.getElementById("formGroupExampleInput8").valueAsNumber;
var tipOutput = document.getElementById("tipOutput")
var totalOutput = document.getElementById("totalOutput");

document.getElementById("btn1").addEventListener("click", function() {
 


    let subTotal = document.getElementById("formGroupExampleInput").valueAsNumber;
    let percentage = document.getElementById("formGroupExampleInput2").valueAsNumber;
    let tipAmount = subTotal * percentage;   



   

 
    let totalBill = subTotal + tipAmount;


   
   
   
    tipOutput.innerHTML = tipAmount.value;
    totalOutput.innerHTML = totalBill;
});


// calculateTip();
// console.log(calculateTip());



// calculateTotal();
// console.log(calculateTotal());  





