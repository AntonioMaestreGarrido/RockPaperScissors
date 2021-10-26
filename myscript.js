
// Your JavaScript goes here!

let i=0
var sele = document.querySelectorAll("#izq div");
console.log(sele)

sele.forEach(e=>e.addEventListener("click",addSelect))





function addSelect(e){
    
    i=i+1
    console.log("SELECCTEEE "+i+e.target )
    e.target.classList.add('select'); 
    console.log("nombre "+e.target.alt )
    Event(Who_Win(e.target.alt))
}
function Who_Win(P_Play) {
    
    let c_play = play();
    alert(c_play)
    let who;
    if (P_Play === c_play) {
        who = "Draw"
        return who
    }

    if (P_Play === "piedra") {
        if (c_play === "papel") { who = "computer" }
        else { who = "player" }

    }
    if (P_Play === "papel") {
        if (c_play === "tijeras") { who = "computer" }
        else { who = "player" }

    }
    if (P_Play === "tijeras") {
        if (c_play === "piedra") { who = "computer" }
        else { who = "player" }

    }

    return who

}
function playerplay() {
    let P_Play;
    do {
        P_Play = prompt("Please enter your move");
        console.log(P_Play);
        P_Play = P_Play.toLowerCase();
        console.log(P_Play)
        if (P_Play === "piedra" || P_Play === "papel" || P_Play === "tijeras") {
            console.log("Well")
            return P_Play
        } else {
            P_Play = "error"
        }
    } while (P_Play === "error")
}
function computerplay() {
    let c_play = Math.floor(Math.random() * 3);


    return c_play;
}
function helloWorld() {
    console.log("Hello World!")
}
function play() {
    let n = computerplay()

    if (n === 0) {
        return "piedra"
    }
    else if (n === 1) {
        return "papel"
    }
    else if (n === 2) {
        return "tijeras"
    }


}