const bicycleArray = [
  { name: "Bici1", weight: 8 },
  { name: "Bici2", weight: 7 },
  { name: "Bici3", weight: 5 },
];

let minorWeigthBike = bicycleArray[0];

for (let bike of bicycleArray) {
  if (bike.weight < minorWeigthBike.weight) {
    minorWeigthBike = bike;
  }
}

console.log(minorWeigthBike);

const { name, weight } = minorWeigthBike;

console.log(
  `La bicicicletta con peso minore è ${name} con un peso di ${weight} kg.`
);
