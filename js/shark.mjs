import Fish from "./fish.mjs";

class Shark extends Fish {
  #stomachEmpty = true;
  energy = 10;

  constructor(_color, _numFins, _speed, _length) {
    super(_color, _numFins);

    this._color = this.color;
    this._numberOfFins = this.numberOfFins;
    this.speed = _speed;
    this.length = _length;
    this.hungry = this.isHungry;
    this.tired = this.isTired;
  }

  get isHungry() {
    return this.#stomachEmpty;
  }

  get isTired() {
    return this.energy <= 4;
  }

  static hasLung = false;

  chase() {
    if (!this.isTired) {
      this.isHungry
        ? console.log(`The shark is chasing its prey at speed ${this.speed}.`)
        : console.log(
            `The shark is swimming at speed ${this.speed}, searching for its next prey.`
          );
      this.swim(this.speed);
      this.energy -= 2;
    } else {
      console.log("The shark is too tired to swim; it needs to rest.");
    }
  }

  attack() {
    if (!this.isTired) {
      if (this.#stomachEmpty) {
        if (this.speed > 5) {
          console.log("The shark caught its prey; it's no longer hungry.");
          this.#stomachEmpty = false;
          this.energy--;
        } else {
          console.log(
            "The shark didn't catch it's prey; now it's hungry and tired."
          );
          this.tired = true;
        }
      } else {
        console.log(
          "The shark is not hungry right now; it doesn't want to attack."
        );
      }
    } else {
      console.log(
        "The shark doesn't have the energy to attack; it needs to rest."
      );
    }
  }

  rest() {
    this.energy <= 6 ? (this.energy += 4) : (this.energy = 10);
    this.#stomachEmpty = true;
    console.log("The shark is rested, and it feels hungry now.");
  }
}

export default Shark;
// let hammerhead = new Shark("grey", 5, 8, 6);
// console.log(hammerhead);
// hammerhead.chase();
// hammerhead.attack();
// hammerhead.chase();
// hammerhead.attack();
// hammerhead.rest();
