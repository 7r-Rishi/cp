function generateNumber() {
  // generate a random integer(hint : Math.random)
  var num = Math.floor(Math.random()*100);
  
  var numElement = document.getElementById("number");
  numElement.textContent = num;
  
  checkOddEven(num);

}

function checkOddEven(num) {
  // logic for even / odd
  var out = num%2 === 0 ? "The number is even" : "The number is odd";
  var oddEvenElement = document.getElementById("odd-even")
  oddEvenElement.textContent = out;
}

window.onload = function () {
  // add event listeners to the button here
  var btn = document.getElementById("generate-number");
  btn.addEventListener("click",generateNumber);
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
