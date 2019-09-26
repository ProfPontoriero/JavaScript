a = 'cecco' //stringa
console.log('a ='+a); // invio il messaggio in console
prova = "Copyright \u00A9 2019" // stringa con codice UNICODE
alert(prova); //alert
//CASE SENSITIVE
//Regole sintattiche come Java, terminatore ; non necessario
//VARIABILI
var num= 4.5;
var num1 = -12.5;
// dichiarazione implicita senza scope
num2 = 3
//STRICT MODE
"use strict"; // --> allert per monitorare la non dichiarazione delle variabili
//ottale esadecimale
numeroOttale = 0123 // numero ottale inizia con lo 0
numeroEsadecimale = 0x123 // numero esadecimale inzia con 0x
//tipi speciali
var x = x=1; //Nan --> not a number
var c = null; //null valore a se, 0 numerico, "" stringa
// undefined e' un altro tipo, quello della variabile non inizializzata
//tipizzazione debole o dinamca --> il tipo della variabile cambia in base alle esigenze
var miaVariabile;
miaVariabile = 1;
miaVariabile = null;
miaVariabile = "uno";
miaVariabile = true;
//COSTANTI
const PIGRECO = 3.14;
//OPERATORI
//stessi di java
5 > 2 && 3 != 4  // true
true || 4 >= 6   // true
!5==5            // false
// operatore ?
x%2 == 0 ? "pari" : "dispari";
//stringhe
var strumento= "piano";
strumento += "forte";   // strumento = "pianoforte"
//EVITARE CONVERSIONI IMPLICITE
//per evitarla, utilizzare i wrapper -->parseInt
parseInt("12")	// 12
parseInt("12abc")	// 12
parseInt("a12bc")	// NaN
parseInt("12.5")	// 12
parseInt("12", 8)	// il valore di 12 nel sistema di numerazione ottale (base 8), cioè 10
//VERIFICARE IL TIPO DI UNA variabile
var prova = new Function();
var numero = 1;
var carattere = "Salve";
console.log(typeof prova);     // ritorna "function"
console.log(typeof numero);    // ritorna "number"
console.log(typeof carattere); // ritorna "string"
//ARRAY array basato sulla rappresentazione letterale
//la numerazione degli indici parte da zero.
var giorniDellaSettimana = [
	"lunedì",
	"martedì",
	"mercoledì",
	"giovedì",
	"venerdì",
	"sabato",
	"domenica"];
// primo elemento undefined
var myArray = [,"elemento"];
//arry diverso tipo, addirittura ARRAY
var myArray = [123, "stringa", ["a", "b", 99]];
//matrici
var matrice = [[24, 13, 1], [48, 92, 17], [8, 56, 11]]
//FOR in --> sfrutto l'indice
var quantita = [12, 34, 45, 7, 19];
var totale = 0;
var indice;
for (indice in quantita) {
	totale = totale +  quantita[indice];
}
//FOR out --> sfrutto il valore
var quantita = [12, 34, 45, 7, 19];
var totale = 0;
var valore;
for (valore of quantita) {
	totale = totale +  valore;
}
//ciclo infinito--> blocco con break
var x=0;
while (true) {
	console.log(x);
	// condizione di uscita
	if (x > 100) break;
    x++;
}
//funzioni
function nome(argomenti) {
 	// istruzioni
}
//esempio con return
function somma() {
	var z = 11 + 5;
	return z;
}
var risultato = somma();
