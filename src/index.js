// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
// import animals, { useAnimals } from "./data";

// const [cat, dog] = animals;

// const { name: catName, sound: catSound } = cat;
// console.log(catSound);

//desstructuring the function
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

const [honda, tesla] = cars;

const {
  coloursByPopularity: [, teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [, hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
