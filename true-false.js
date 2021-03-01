//Falsy value
// 0 ---> means false
// "" --->empty string means false;
// undefined --->variable means false.
// null --->means false.
//NaN -----> means false.
// false --- is a false value 

//Truthy value;
// " "---> string with white space is true.
//Negative or positive number is also truthy value.
// "0" ---> is true value.
//[] empty arry is true.

let Name = false
console.log(Name);
if (Name) {
    console.log('condition is true')
}
else{
    console.log('condition is false')
}