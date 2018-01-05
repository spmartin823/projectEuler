/**
 * Created by SeamusMartin1 on 3/2/17.
 */
allProducts = [];
allProductsReverse = [];
palindromes = [];
for (i=0; i<1000; i++) {
    for (k=0; k<1000; k++) {
        allProducts.push(i*k);
    } /* this section gets the product of 2 sets of all 3 digit numbers */
}
for (j=1; j<allProducts.length; j++) {
    allProducts[j] = allProducts[j].toString();
    allProductsReverse[j] = allProducts[j].split('').reverse('').join(''); /*converts to string and reverses */
    if (allProductsReverse[j] == allProducts[j]) { /* if it is a palindrome, pushes to "palindromes" array */
        palindromes.push(allProducts[j]);
    }
}
for (h=0; h<palindromes.length; h++) {  /* This loop and the function at the end sort the palindrome
                                           array so that largest can be identified  */
    palindromes[h] = Number(palindromes[h])
}
function getBigger(a,b) {
    return a - b;
}
palindromes.sort(getBigger);
console.log(palindromes)