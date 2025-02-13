// Fucntion Currying 
// Process of functional programming where we can transform a function with multiple 
// arguments into a serquence of nesting functions that take one argument at a time
// function f(a,b,c) is transformed into f(a)(b)(c)
//its dosen't call function , just transform


//TODO: In practical JavaScript development, currying is useful when you want to create reusable functions where you can partially apply arguments, meaning you can fix some values beforehand and then use the resulting function with just the remaining arguments needed, making your code more flexible and modular, especially when dealing with functions that take multiple parameters; essentially, it allows you to build complex functions by composing smaller, single-argument functions


// eg:1

function sum (a,b,c){
    return a+b+c
}

//console.log(sum(1,2,3))
//sum (1)(2)(3)

function curry(fn){
    return function (a){
        return function (b){
            return function (c){
                return fn(a,b,c)
            }
        }
    }
}

const curried_sum = curry(sum)
console.log(curried_sum(1)(2)(3))


