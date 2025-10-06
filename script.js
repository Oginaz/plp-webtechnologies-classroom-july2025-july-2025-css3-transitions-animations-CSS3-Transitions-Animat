/* ======================
   Part 2: Functions, Parameters & Return
   ====================== */

// Simple reusable function
function addNumbers(a, b) {
  return a + b;
}

// Function that interacts with DOM
function showSum() {
  let n1 = parseFloat(document.getElementById("num1").value) || 0;
  let n2 = parseFloat(document.getElementById("num2").value) || 0;

  let result = addNumbers(n1, n2);
  document.getElementById("sum-result").innerText = `Sum = ${result}`;
}

/* ======================
   Part 3: Combine CSS + JS
   ====================== */
const animateBtn = document.getElementById("animateBtn");
const magicBox = document.getElementById("magicBox");

animateBtn.addEventListener("click", () => {
  magicBox.classList.toggle("active");
});
