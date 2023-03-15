/*Esercizio di oggi, Lista della spesa con ciclo while

 Consegna:
 Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
   gli elementi della lista individualmente con un ciclo while.

 Consigli:
 Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
 Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, 
 all'interno ciclo whileEsercizio di oggi, Lista della spesa con ciclo while*/

// const lista = document.getElementById("lista").value;

// Definisco l'array della lista della spesa
let listaSpesa = [
  "prodotto1",
  "prodotto2",
  "prodotto3",
  "prodotto4",
  "prodotto5",
  "prodotto6",
  "prodotto7",
  "prodotto8",
  "prodotto9",
  "prodotto10",
  "prodotto11",
];

let i = 0;

while (i < listaSpesa.length) {
  document.write(listaSpesa[i] + "<br>");
  i++;
}
