class Fish {
  #_color;
  #_numFins;

  constructor(_color, _numFins = 3) {
    this.#_color = _color;
    this.#_numFins = _numFins;
  }

  get color() {
    return this.#_color;
  }

  get numberOfFins() {
    return this.#_numFins;
  }

  swim(_speed) {
    if (isNaN(_speed)) throw Error("Speed must be numeric");
    let output = Array(_speed).fill("Swish").join(", ");
    console.log(output);
    return output;
  }
}

export default Fish;

//Example usage of the class
let jaws = new Fish("grey", 3);
console.log(jaws.color);
console.log(jaws.numberOfFins);
jaws.swim(8);
