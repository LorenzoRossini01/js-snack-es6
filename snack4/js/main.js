const tableBodyEl = document.getElementById("table-body");

const teams = [
  { name: "Team Turtle", score: 0, foul: 0 },
  { name: "Team Frog", score: 0, foul: 0 },
  { name: "Team Penguin", score: 0, foul: 0 },
  { name: "Team Hippopotamus", score: 0, foul: 0 },
  { name: "Team Seal", score: 0, foul: 0 },
  { name: "Team Crocodile", score: 0, foul: 0 },
  { name: "Team Dolphin", score: 0, foul: 0 },
];
console.table(teams);

const Randomizer = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const teamsFoul = teams.map((team, index) => {
  let { name, score, foul } = team;
  score = Randomizer(1, 100);
  foul = Randomizer(1, 100);
  console.log(name, foul);
  return { name, foul };
});
console.table(teamsFoul);

teamsFoul.forEach((team, index) => {
  const { name, foul } = team;
  let tableRowHtml = `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${name}</td>
      <td>${foul}</td>
    </tr>`;

  tableBodyEl.innerHTML += tableRowHtml;
});
