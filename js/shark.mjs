import Fish from "./fish.mjs";

class Shark extends Fish {
  #stomachEmpty = true;
  energy = 10;

  constructor(_color, _numFins, _speed, _length) {
    super(_color, _numFins);
    this._color = this.color;
    this._numberOfFins = this.numberOfFins;

    if (_speed <= 0) throw Error("Speed must be a positive number");
    else {
      this.speed = _speed;
      this.OriginalSpeed = _speed;
    }
    if (isNaN(_length)) throw Error("Length must be a number");
    else if (_length <= 0) {
      throw Error("Length must be a positive number");
    } else {
      this.length = _length;
    }
    this.hungry = this.isHungry;
    this.tired = this.isTired;
  }

  get isHungry() {
    return this.#stomachEmpty;
  }

  get isTired() {
    return this.energy < 3;
  }

  static hasLung = false;

  chase() {
    if (this.isTired) {
      console.log("The shark is too tired to swim; it needs to rest.");
    } else {
      this.isHungry
        ? console.log(
            `The shark is chasing its prey at a speed of ${this.speed}.`
          )
        : console.log(
            `The shark is swimming at a speed of ${this.speed}, searching for its next prey.`
          );
      this.swim(this.speed);
      this.energy--;
    }
  }

  speedup() {
    if (this.isTired) {
      console.log("The shark is too tired to speed up; it needs to rest.");
      return;
    }
    if (this.isHungry) {
      this.speed += 2;
      this.energy -= 2;
      console.log(`The shark is speeding up to catch its prey.`);
    } else {
      this.speed++;
      this.energy--;
      console.log(
        `The shark is trying its best to speed up, but its stomach is full.`
      );
    }
  }

  attack() {
    if (this.isTired) {
      console.log(
        "The shark doesn't have the energy to attack; it needs some rest."
      );
      return;
    }

    if (this.isHungry) {
      if (this.speed > 5) {
        console.log("The shark caught its prey; it's no longer hungry.");
        this.#stomachEmpty = false;
        this.energy--;
      } else {
        console.log(
          "The shark didn't catch it's prey; now it's hungry and upset."
        );
        this.energy > 5 ? (this.energy -= 3) : (this.energy -= 2);
      }
    } else {
      console.log(
        "The shark is not hungry right now; it doesn't want to attack."
      );
    }
  }

  rest() {
    this.energy <= 6 ? (this.energy += 4) : (this.energy = 10);
    this.#stomachEmpty = true;
    this.speed = this.OriginalSpeed;

    console.log("The shark got some rest, and it feels hungry now.");
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
