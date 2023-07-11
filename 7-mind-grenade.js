const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`Sum is : ${num1 + num2}`);
}

//This gets executed when module is exported even when it is not exported.
addValues();