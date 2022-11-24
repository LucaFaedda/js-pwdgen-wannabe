
// 1° Primo prompt per dare possibilità di inserire il nome + prova console

let nome = prompt("Inserisci il tuo nome");

console.log(nome);

// 2° Secondo prompt per dare possibilità di inserire il cognome + prova console

let cognome = prompt("Inserisci il tuo Cognome")

console.log(cognome)

// 3° Terzo prompt per dare possibilità di inserire il colore preferito + prova console

let colore_preferito = prompt("colore preferito")

console.log(colore_preferito)

// 4° Concatenazione valori e valore 21 + prova console

let risultato = `${nome}${cognome}${colore_preferito}${"21"}`

console.log(risultato)

// 5° Visualizzare a schermo risultato

document.getElementById("password_incerta").innerHTML = risultato 





