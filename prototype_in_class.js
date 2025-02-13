class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  sayMyName(){
    return `${this.fname} ${this.lname}`
  }
}

class SuperHeor extends Person{
    constructor(fname,lname){
        super(fname,lname)
        this.isSuperHero = true
    }

    fightCrime(){
        console.log("Super Human Fight Crime")
    }

}

const p1 = new SuperHeor("safin","sayed")
console.log(p1.sayMyName())
p1.fightCrime()
