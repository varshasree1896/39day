// Generate 10 three digit random numbers
let numberArray = new Array();
for (let num=0; num<=10; a++){
    let number = Math. floor(Math. random()*900+100);
    numberArray. push(number);  
}
let arr = numberArray. sort();
console. log(arr);
console. log("The second smallest element is "+arr[1]);   
console. log("The second largest element is "+arr[arr. length-2]);  