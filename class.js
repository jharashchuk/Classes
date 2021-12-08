class Animals {

    constructor(name) {       
        this.name = name;
    }

    run() {        
        console.log(`${this.name} can run`);
    }
    
    stop() {       
        console.log(`${this.name} stand`);
    }

    setLegs(legs) {
        this.legs = legs;
    }

    showLegs() {
        console.log(`${this.name} has legs: ${this.legs}`);
    }    
   
}

class Cat extends Animals {
  
    constructor(name) {
      super(name); 
      this.setLegs(4);    
    }

    sayMeow() {
        console.log(`${this.name} can meow`);
    }

    pur() {
        console.log(`${this.name} can pur`);
    } 
       
}

class Dog extends Animals {
  
    constructor(name) {
      super(name); 
      this.setLegs(4);    
    }

    bark() {
        console.log(`${this.name} can bark`);
    }

    givePaw() {
        console.log(`${this.name} can give paw`);
    } 
       
}
class Butterfly extends Animals {

    constructor(name) {
        super(name);
        this.setLegs(6);
    }

    fly() {
        console.log(`${this.name} can fly`);
    }
}

class Parrot extends Animals {

    constructor(name) {
        super(name);
        this.setLegs(2);
    }

    fly() {
        console.log(`${this.name} can fly`);        
    }

    sing() {
        console.log(`${this.name} can sing`);
    }
}

console.log(Animals);

console.log(Cat);
let murzik = new Cat('Murzik');
console.log(murzik);
murzik.showLegs();
murzik.sayMeow();
murzik.pur();
murzik.run();
murzik.stop();

console.log(Dog);
let reks = new Dog('Reks');
console.log(reks);
reks.showLegs();
reks.bark();
reks.givePaw();
reks.run();
reks.stop();

console.log(Butterfly);
let butterflyLisa = new Butterfly('Lisa');
console.log(butterflyLisa);
butterflyLisa.showLegs();
butterflyLisa.fly();

console.log(Parrot);
let parrotGosha = new Parrot('Gosha');
console.log(parrotGosha);
parrotGosha.showLegs();
parrotGosha.fly();
parrotGosha.sing();
