const cardContainerEl = document.getElementById("card-container");

const bicycleArray = [
  { name: "Neri", weight: 8 },
  { name: "Rossi", weight: 7 },
  { name: "Bianchi", weight: 5 },
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

cardHtml = `
<div class="card">
    <img src="https://www.bicidastrada.it/wp-content/uploads/2018/07/Oltre-XR4-disc-3-4.jpg"
    class="card-img-top" alt="..."/>
    <div class="card-body">
       <h5 class="card-title">${name}</h5>
       <p class="card-text">La bicicletta pesa solo ${weight}Kg</p>
    </div>
</div>`;

cardContainerEl.innerHTML = cardHtml;
