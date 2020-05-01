/*
class MyClass {
    constructor(input) {
        this.myProperty = input;
    }

    myMethod() {
        console.log(this.myProperty);
    }
}

var myObject = new MyClass("This is the content of this object");
myObject.myMethod();

var decimal =14;
var binary = "";


//Den "nemme" måde at løse opgaven på, og som gør brug af en metode "toString".
//Man skal dog kunne forklare hvad metoden gør, og hvordan den virker. Se ovenfor.
console.log(decimal.toString(2));
*/

//Løsning på opgaven fra bunden (Giver mere at snakke om):
var decimal = 14;
var binary = "";

while (decimal > 0) {
    binary = "" + decimal % 2 + binary;
    decimal = (decimal / 2) - ((decimal / 2) % 1);
}

console.log(binary);


/*Skriv et program, som kan konvertere et 10-talssystem tal til et binært tal og eventuelt omvendt.
F.eks. vil tallet 23 blive til det binære tal "10111" og det binære tal "1111" vil blive til 15.

Forklar dit svar med et flow-diagram og dokumenter din løsning på et github repository.

Du har en time og alle hjælpemidler er tilladt*/
