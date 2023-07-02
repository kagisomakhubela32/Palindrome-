//Outter LOOP VALUES
minI = 100;
maxI = 999;
//Inner LOOP VALUES
minJ = 100;
maxJ = 999;

//Function to check if a number is a palindrome
function palindrome(value){
    //it is easy to reverse a string than a number(int)
    //Convert to string and split into array
    value = value.toString().split('');
    //Compare each character to the opposite side
    for (let i = 0; i < value.length / 2; i++) {
        //If any characters do not match, return false
        //If all characters match, return true
        //If the length is odd, ignore the middle character
        //If the length is even, ignore the middle two characters
        /*Overall, the expression is used to determine whether the element at 
        index i is different from its symmetrically opposite element from the 
        end of the array. It is often used in algorithms or code that involve 
        checking for symmetry or palindromes within an array. */
        if (value.length % 2 === 0 && value[i] !== value[value.length - 1 - i]){
            return false;
        }
        //If all characters match, return true
        if (value[i] !== value[value.length - 1 - i]){
            return false;
        }
    }
    //If all characters match, 
    return true;
}



//Function to find the largest palindrome
function largestPalindrome(){
    //Set the largest palindrome to 0
    //Loop through the outer loop values
    //Loop through the inner loop values
    //Check if the product is a palindrome
    //If it is, check if it is larger than the largest palindrome
    //If it is, set the largest palindrome to the product
    //Return the largest palindrome
    
    let largest = 0;
    for (let i = maxI; i >= minI; i--) {
        for (let j = maxJ; j >= minJ; j--) {
            let product = i * j;
            if (palindrome(product) && product > largest) {
                largest = product;
            }
        }
    }
    return largest;
}
//Print the largest palindrome
console.log(largestPalindrome());