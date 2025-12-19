let gameboard = document.getElementById("MainDiv");
let Tas = document.getElementById("Tas");
let currentPosition = 0;
let MaxOfPosition = 100;


let CreateTable = () => {
    let id = 100;
    for (let row = 0; row < 10; row++) {
        if (row % 2 === 0) {
            for (let col = 0; col < 10; col++) {
                let div = document.createElement("div");
                div.className = "cell";
                div.id = id;
                div.innerText = id;
                gameboard.appendChild(div);
                id--;
            }
        }
        else {
            let baraxe = [];
            for (let col = 0; col < 10; col++) {
                let div = document.createElement("div");
                div.className = "cell";
                div.id = id;
                div.innerText = id;
                baraxe.unshift(div);
                id--;
            }
            baraxe.forEach((div) => {
                gameboard.appendChild(div);
            });
        }

    }
}


Tas.addEventListener("click", () => {
    let AdadRandom = Math.floor(Math.random() * 6) + 1;

    Tas.innerHTML = "";


    Tas.className = "adad" + AdadRandom;
    for (let i = 0; i < AdadRandom; i++) {
        let circle = document.createElement("div");
        circle.className = `circle`;
        Tas.appendChild(circle);
    }
    Tas.className = "adad" + AdadRandom;


    let newPosition = currentPosition + AdadRandom;


    if (newPosition > MaxOfPosition) {

        return;
    }


    if (currentPosition !== 0) {
        document.getElementById(currentPosition).style.backgroundColor = "";
    }

    currentPosition = newPosition;

    document.getElementById(currentPosition).style.backgroundColor = "yellow";
    if (newPosition === MaxOfPosition) {
        alert("Congratulations! You've reached the end!");
        return;
    }
});
CreateTable()