//*its just simplified writing code for the iterable and iterators
//*generator function can pause and continue function execution at any stage of function execution

//Todo: yield is a Javascript constructed used to pause and resume a generator function* . It's described in the context of Observable in their Introduction to Generators notebook.
//Todo: It's used in the Particle Sankey notebook to allow the generator cell to run repeatedly to yield the animation

function* generatorFunction() {
  // * is the symble of generator function
  yield "Hello world";
  yield "I am superman";
}
//invocations
//genobj is an iterator now
const genObj = generatorFunction();

for (const word of genObj) {
  console.log(word);
}


