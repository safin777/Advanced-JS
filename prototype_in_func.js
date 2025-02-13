function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

// const p1 = new Person('Bruce','Wayne')  //constructor function
// const p2 = new Person('Brucely','Waynely')

Person.prototype.getFullname = function () {
  console.log(`Person full name ${this.fname} ${this.lname}`); //inheritance
};

// p1.getFullname()
// p2.getFullname()

function SuperHero(fname, lname) {
  Person.call(this, fname, lname);
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  console.log("Fighting Crime");
};

SuperHero.prototype = Object.create(Person.prototype);
//Todo: chain the SuperHeor method with the Person method's prototype
// to inheritance and also can use in the SuperHero method

const batman = new SuperHero("Bruce", "Wayne");
SuperHero.prototype.constructor = SuperHero; // if you don't write this js think that superHero constructor created from Person method
console.log(batman.getFullname());

