let subTotal = document.getElementById("formGroupExampleInput").value;
let percentage = document.getElementById("formGroupExampleInput2").value;
let hours = document.getElementById("formGroupExampleInput3").value;
let hourRate = document.getElementById("formGroupExampleInput4").value;
let pointsEarned = document.getElementById("formGroupExampleInput5").value;
let totalPoints = document.getElementById("formGroupExampleInput6").value;
let tankSize = document.getElementById("formGroupExampleInput7").value;
let pricePerGallon = document.getElementById("formGroupExampleInput8").value;

document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("tipOutput").innerHTML = tipAmount;
    document.getElementById("totalOutput").innerHTML = totalBill;
});

function calculateTip() {
    return subTotal * percentage;   
}
calculateTip()
let tipAmount = calculateTip();


function calculateTotal() {
    return subTotal + tipAmount; 
}

calculateTotal()
let totalBill = calculateTotal();




