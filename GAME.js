//Datos de jugador
let name ="Gus";
let lastname = "Kuri";
let level = "117";
name="Gustavo";  
const ID="09022004"

//Ficha de jugador
console.log("Player:" + " " + name);
console.log([level, name, ID]);

//Aumento de nivel
let EXPT = 100
console.log("+EXP:" + EXPT)
let TLEVEL = EXPT + (level*10);
console.log("New Level:" + " " + (TLEVEL/10));

/* 
Cuando se unen 2 cadenas se 
llama concatenación 
*/
//para agregar espacio se coloca " "

//matchmaking
let Cname = name + " " + lastname;
let points = 25;
let mm = points == 25;
console.log("Winer:" + " " + mm);

if (mm == true) {
    console.log("Winer:" + " " + Cname);}
    else {console.log ("You fail")}

//iniciar sesión (if)
let password = "123"
let input = "124"
let result = input == password

if (result === false) { 
    console.log("Password is wrong");} 
    else {console.log("Loging")}

// Transacciones 
let card = "Debid"

switch(card) {
    case "Credit":
        console.log("This is a credit card")
        break;
    case "Debid":
        console.log("This is a debid card")
        break;
    default:
        console.log("No card")}

//Codigos de cangeo
// Skin code: 12   weapon code: 24
let code = 24

switch (code) {
    case 12:
        console.log("You will recive a skin")
        break;
    case 24:
        console.log("You will recive a weapon")
        break;
    default:
        console.log("This code doesn't exist. Try again")}

//BUCLES
/* Se puede seleccionar un elemento de un conjunto
eligeindo su posicion de forma que el primer lugar 
inicie en 0
"length" mide la longitud del conjunto
*/
let kills = 70
let tk = kills

while(kills > 0) {
    console.log("kills: " + tk)
    kills -- ;}

let players = ["Gus", "Dania", "Mau", "Brian", "Vadillo", "Ana"];

console.log("Kill lider:" + " " + players[2] 
+ " " + tk + " " + "Kills");

// Final de partida
let v= "Continue"
switch (v) {
    case "Continue":
        console.log("Looking new game");
        break
    case "Rematch":
        console.log("Loading map")
        break;
    case "Back to menu":
        console.log("Loading main menu")
        break
    default:
        console.log("Select an option")}

let Mm = ["Continue", "Rematch", "Back to menu"]
let m = Mm[3]

switch (m) {
    case "Continue":
        console.log("Looking new game");
        break
    case "Rematch":
        console.log("Loading map")
        break;
    case "Back to menu":
        console.log("Loading main menu")
        break
    default:
        console.log("Select an option")}

//Ciclos for (listas)
let Fplayers = ["Dania", "Gus", "Ana"]

console.log("Featured players: " + Fplayers.length);

for (let i = 0; i < Fplayers.length; i++ ) {
    console.log(Fplayers[i])}

//Funciones
console.log("Players joined:" + " " + players.length)

function winner (name){
    console.log(name + ": " + "winner");} 

function loser (name) {
    console.log(name + ": " + "Loser")}

winner ("Gus")
loser ("Dania")
loser ("Mau")
loser ("Brian")
loser ("Vadillo")
loser ("Ana")


 
