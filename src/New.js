import { useState } from "react";
function Mycar(props) {
  return (
    <>
      <li>Car brand is {props.brand}</li>
    </>
  );
}

function New() {
  const cars = [
    { id: 1, brand: "audi" },
    { id: 2, brand: "bmw" },
  ];
  return (
    <>
      <h1>Garage Info</h1>
      <ul>
        {cars.map((car) => (
          <Mycar key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default New;
