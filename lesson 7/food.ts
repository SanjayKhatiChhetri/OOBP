// Exercise 4 (objects/exercises/4-classes.js): from 2_JS Objects.pdf

class Food {
  #foodName: string;
  #quantity: number;

  constructor(foodName: string, quantity: number) {
    this.#foodName = foodName;
    this.#quantity = quantity;
  }

  WhatIsThis(): any {
    console.log(`${this.#foodName}`);
  }

  eatOne(): any {
    // console.log(this.#quantity);
    if (this.#quantity > 0) {
      this.#quantity = this.#quantity - 1;
      console.log(
        `Slurp! One ${this.#foodName.toLowerCase()} eaten. ${
          this.#quantity
        } remaining `
      );
      // } else if (this.#quantity == 0) {
      //   console.log(`sorry, no such food in the refrigerator ! `);
    } else {
      console.log(`Sorry, no more ${this.#foodName.toLowerCase()} remaining!`);
    }
  }

  getQuantity(): any {
    return this.#quantity;
  }

  getName() {
    return this.#foodName;
  }
}

// let banana = new Food("Banana", 2);

// banana.WhatIsThis();
// banana.eatOne();
// banana.eatOne();
// banana.eatOne();

/* Exercise 5: Create a class for Refrigerator which is capable of storing food. The class should have couple 
of different methods.
• putFood – stores food in refrigerator
• getAndEatFood – gets and consumes the specified food and amount from refrigerator, 
indicates if there is no such food available, indicates if last food of the type was eaten
• getContents – display list of what food and how many is inside the refrigerator
Fill your refrigerator with different Foods and then eat them. Validate the everything works as intended. */

class Refrigerator {
  #foodStorage: Food[] = [];

  constructor() {
    //can be initilizes as above
    this.#foodStorage = [];
  }

  putFood(food: Food) {
    this.#foodStorage.push(food);
  }

  getContents() {
    //display list of what food and how many is inside the refrigerator
    console.log("---------------------");
    for (let i = 0; i < this.#foodStorage.length; i++) {
      //   if (this.#foodStorage[i].getQuantity() > 0) {
      console.log(
        `|${this.#foodStorage[i].getName()} ${this.#foodStorage[
          i
        ].getQuantity()}`
      );
      // }
    }
    console.log("---------------------");
  }

  getAndEatFood(nameOfFood: string) {
    let foundFood: Food | undefined = undefined;
    let indexNumOfFoundFood: number = -1;
    //  Find food which has the same name as nameofFood from our storage
    for (let i = 0; i < this.#foodStorage.length; i++) {
      if (nameOfFood === this.#foodStorage[i].getName()) {
        foundFood = this.#foodStorage[i];
        indexNumOfFoundFood = i;
        break;
      }
    }
    if (foundFood == undefined) {
      console.log("Sorry, no such food in the refrigerator!");
      return;
    }

    //consume Food
    foundFood.eatOne();
    //check if the quantity of food is 0
    if (foundFood.getQuantity() === 0) {
      //remove the food from rfrigerator
      //const indexNumOfFoundFood = this.#foodStorage.indexOf(foundFood);//not appropriate because we already have index from for loop waste of memory or computation if thought in terms of billon iteration indexof has to made
      this.#foodStorage.splice(indexNumOfFoundFood, 1);
    }
  }
}

let refrigerator = new Refrigerator();
let apple = new Food("Apple", 2);
let bananas = new Food("Banana", 3);
refrigerator.putFood(apple);
refrigerator.putFood(bananas);
refrigerator.getContents();
refrigerator.getAndEatFood("Apple");
refrigerator.getAndEatFood("Apple");
refrigerator.getAndEatFood("Banana");
refrigerator.getAndEatFood("Apple");
refrigerator.getContents();

/* OUTPUT
-----------
| Apple 2
| Banana 3
-----------
Slurp! One apple eaten. 1 remaining
Slurp! One apple eaten. 0 remaining
Slurp! One banana eaten. 2 remaining
Sorry, no such food in this refrigerator!
-----------
| Banana 2
----------- 
*/
