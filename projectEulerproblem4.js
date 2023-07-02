function largest_palindrome(){
  var maxnum = document.getElementById('maxnum').value;
  var minnum = document.getElementById('minnum').value;

  let palindrome = 0;
  let productString = 0;
  let productRv = 0;
  let product = 0;

  for (let x = minnum; x <= maxnum; x++) {
    for (let y = minnum; y <= maxnum; y++) {
      product = x * y;
      productString = String(product);
      productRv = productString.split("").reverse().join("");

      if (productString == productRv && product > palindrome) {
          palindrome = product;
          //console.log(palindrome);
      }
    }
  }
  document.getElementById("result").textContent = "The largest palindrome = " + palindrome;;
}

//console.log(palindrome);
