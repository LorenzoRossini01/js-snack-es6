# Esercizio Snack 2

### Traccia

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame.

Per preparare l'aula di un nuovo corso abbiamo bisogno dei seguenti dati:

- Un array di stringhe contenente il loro nome tutto in maiuscolo. ES (Marco della Rovere => MARCO DELLA ROVERE);
- Un array di oggetti "studente" che hanno un totale di voti superiore a 70
- Un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120

Questo è l'elenco degli studenti:

| Id  | Name                  | Grades |
| --- | --------------------- | ------ |
| 213 | Marco della Rovere    | 78     |
| 110 | Paola Cortellessa     | 96     |
| 250 | Andrea Mantegna       | 48     |
| 145 | Gaia Borromini        | 74     |
| 196 | Luigi Grimaldello     | 68     |
| 102 | Piero della Francesca | 50     |
| 120 | Francesca da Polenta  | 84     |

### Svolgimento

- creo un array(1) di oggetti con argomenti (id,name,grades)

  - per ogni elemento dell'array modifico la stringa del nome facendola diventare in maiuscolo
  - metto i risultati in un altro array (2) con lo stesso numero di elementi
  - stampo il log dell'array

- per ogni oggetto del nuovo array(2)

  - verifico che abbiano grades > 70
  - invio solo gi elementi che soddisfano quella condizione in un altro array(3)
  - stampo il log dell'array

- per ogni oggetto del nuovo array(3)
  - verifico che abbiano un id > 120
  - invio solo gi elementi che soddisfano quella condizione in un altro array(3)
  - stampo il log dell'array
