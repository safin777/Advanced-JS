//Closure is the combination of fucntions are bundled togather with references to its surrounding state
//Closure are created every time a function is created at function created time


//simple terms to remember
// a closure is created when a function return from the another function
//after the inner fuunction exeution it's still has the ability to get the value of its outer scope variable 



function outer(){
    let counter = 0 
    function inner(){
        counter++
        console.log(counter)
    }
    //inner()  this is the step-1 of testing 
    // variantion-2, lets return the inner function 
    return inner
}

//outer() //each time a new function will created and count the value from initial value 0 and output will be 1 
//outer() //Same goes for this one

// variantion-2

const fn = outer()
fn() //output 1
fn() //output 2



