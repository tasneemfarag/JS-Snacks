/* Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor 
is set to Dog. Then add a bark() method to the Dog object 
so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console. */

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log("Woof!");
  };

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"


/*Add the property numLegs and the two methods eat() and describe() to the prototype of Dog
 by setting the prototype to a new object.*/

 function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs: 5, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  

/*Create a dog object with name and numLegs properties, and set them to a string and
   a number, respectively. */

   let dog = {
    name: '',
    numLegs: 4
    };

/*Using the dog object, give it a method called sayLegs. The method should return the sentence 
"This dog has 4 legs." */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + numLegs + "legs.";}
  };
  
  dog.sayLegs();
