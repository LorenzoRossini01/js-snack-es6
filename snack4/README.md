# Esercizio Snack 4

### Traccia

Usa l'array allegato alla traccia per completare i seguenti punti:

- Valorizzare le proprietà dei punti fatti e dei falli subiti con numeri randomici
- Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti, recuperandoli con il destructuring, e stampiamo tutto in console.

## BONUS

Stampare in pagina oltre che in console!
teams.js

```javascript
const teams = [
  { name: "Team Turtle", score: 0, foul: 0 },
  { name: "Team Frog", score: 0, foul: 0 },
  { name: "Team Penguin", score: 0, foul: 0 },
  { name: "Team Hippopotamus", score: 0, foul: 0 },
  { name: "Team Seal", score: 0, foul: 0 },
  { name: "Team Crocodile", score: 0, foul: 0 },
  { name: "Team Dolphin", score: 0, foul: 0 },
];
```

### Svolgimento

- creazione array (teams) di oggetti (team)
- creo una arrow function per la creazione di un numero casuale da 1 a 100
- creo una copia dell'array utilizzando il .map
  - uso il destructuring per assegnare delle costanti ai valori delle chiavi
  - utilizzo la funzione randomizer per assegnare score e foul
  - stampo in console i risultati
- per ogni elemento del nuovo array
  - uso il destructuring per assegnare delle costanti ai valori delle chiavi
  - con il template literal stampo il risultato su dom sottoforma di tabella
