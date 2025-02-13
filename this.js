//TODO How to determine 'this'?

//Implicit Binding
//Explicit Binding
//New Binding
//Default Binding

//Todo Order of precedence

// New Binding > Explicit Binding > Implicit Binding > Default Binding

//TODO Inplicit Binding

const person = {
  name: "Safin",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

//person.sayMyName();

//TODO Explicit Binding

globalThis.name = 'Batman'
function sayMyName() {
  console.log(`My name is ${this.name}`);
}

//sayMyName.call(person)

//TODO New Binding

function Person(name){   // called as constructor function 
    this.name = name;
}

const p1 = new Person('Sayed')
const p2 = new Person('Islam')

//console.log(p1.name,p2.name)

//TODO Default Binding

sayMyName()





