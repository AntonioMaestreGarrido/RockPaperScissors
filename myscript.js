
// Your JavaScript goes here!

let i = 0
var sele = document.querySelectorAll("#izq div");
console.log(sele)

sele.forEach(e => e.addEventListener("click", addSelect))





function addSelect(e) {

    i = i + 1
    console.log("SELECCTEEE " + i + e.target)
    e.target.classList.add('select');
    console.log("nombre " + e.target.alt)
    Who_Win(e.target.alt)
    
   
    //document.querySelectorAll("img").forEach(e=>e.classList.remove("select"))

}
function deselect(){
    document.querySelectorAll("img").forEach(e=>e.classList.remove("select"))
}
function Who_Win(P_Play) {

    let c_play = play();

    let who;
    if (P_Play === c_play) {
        who = "Draw"

    }

    else if (P_Play === "piedra") {
        if (c_play === "papel") { who = "You Lose" }
        else { who = "Win!" }

    }
    else if (P_Play === "papel") {
        if (c_play === "tijeras") { who = "Lose" }
        else { who = "Win!" }

    }
    else if (P_Play === "tijeras") {
        if (c_play === "piedra") { who = "Lose" }
        else { who = "Win!" }

    }
    document.querySelector("#vs").textContent=who;
    return who

}

function computerplay() {
    let c_play = Math.floor(Math.random() * 3);


    return c_play;
}
function helloWorld() {
    console.log("Hello World!")
}
function play() {
    /*let n = computerplay()
    var cp = ""
    if (n === 0) {
        cp = "piedra"
    }
    else if (n === 1) {
        cp = "papel"
    }
    else if (n === 2) {
        cp = "tijeras"
    }*/
    const opciones = ['piedra', 'papel', 'tijeras']
    let cp = opciones[Math.floor(Math.random()*opciones.length)]
    document.querySelector("img[alt='" + cp + "2'] ").classList.add("select")
    return cp;

}