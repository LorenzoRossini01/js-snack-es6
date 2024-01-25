# Esercizio Snack 3

### Traccia

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

## BONUS

Stampare in pagina oltre che in console!

### Svolgimento

- creo un array (bicycleArray) di oggetti con argomenti {nome:..., peso:...,}
- imposto variabile contenente un oggetto da confrontare che sarà per il momento uguale all'oggetto dell'array con indice 0
- per ogni bici dell'array
  - confronto SE il peso della bici è minore al peso della bici conservata nella variabile
    - se vero allora sostituisco l'oggetto contenuto nella variabile con il nuovo oggetto bici
- ottengo un oggetto che rappresenta la bici col peso minore
- utilizzando il destructuring salvo le chiavi dell'oggetto risultante
- le inserisco in un consol.log/sul DOM con il template literal
