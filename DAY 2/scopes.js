
//global scope: variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
let globalVar = "I am a global variable";
function globalScopeExample() {
    console.log(globalVar); // can access globalVar(can be accessed anywhere in the code)
}
globalScopeExample();   


//function scope: variables declared within a function are in the function scope and can only be accessed within that function.
function functionScopeExample() {
    let functionVar = "I am a function variable";
    console.log(functionVar); // can access functionVar(can't be accessed outside of this function)
}   
functionScopeExample();


//BLOCK SCOPE: variables declared within a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // can access blockVar(only with if statement)
}
