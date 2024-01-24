const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

const tableName = "Tavolo VIP";

console.table(vips);

const Randomizer = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomUniqueNumber = (min, max, elementNumber) => {
  const postiArray = [];
  while (postiArray.length < elementNumber) {
    let myRandomNum = Randomizer(1, elementNumber);
    if (!postiArray.includes(myRandomNum)) {
      postiArray.push(myRandomNum);
    }
  }
  return postiArray;
};

const vipPosto = getRandomUniqueNumber(1, 11, 11);

let vipsTable = [];
vipsTable = vips.map((vip, index) => ({
  Tavolo: tableName,
  Vip: vip,
  Posto: vipPosto[index],
}));
console.table(vipsTable);
