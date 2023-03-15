/*Esercizio di oggi, Lista della spesa con ciclo while

 Consegna:
 Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
   gli elementi della lista individualmente con un ciclo while.

 Consigli:
 Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
 Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, 
 all'interno ciclo whileEsercizio di oggi, Lista della spesa con ciclo while*/

// ottengo il riferimento all'elemento HTML in cui visualizzare gli elementi della lista
let lista = document.getElementById("lista");
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

// inizializzo l'indice per il ciclo while
let i = 0;

// eseguo il ciclo while per visualizzare gli elementi della lista
while (i < listaSpesa.length) {
  //   document.write(listaSpesa[i] + "<br>");
  // creo un nuovo elemento HTML per l'elemento della lista
  let elementoLista = document.createElement("li");
  // imposto il testo dell'elemento della lista sul valore corrente
  elementoLista.innerText = listaSpesa[i];
  // aggiungo l'elemento della lista all'elemento HTML della lista
  lista.appendChild(elementoLista);
  // incrementa l'indice per passare all'elemento successivo della lista
  i++;
}
