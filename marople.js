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
    console.log(AdadRandom);
    Tas.className = "adad1";
    let newPosition = currentPosition + AdadRandom;
    // if (AdadRandom === 1) {
    //     Tas.style.backgroundImage = 'url("/image/1.png")'
    //     Tas.innerText = "";
    // }
    // if (AdadRandom === 2) {
    //     Tas.style.backgroundImage = 'url("/image/2.png")'
    //     Tas.innerText = "";
    // }
    // if (AdadRandom === 3) {
    //     Tas.style.backgroundImage = 'url("/image/3.png")'
    //     Tas.innerText = "";
    // }
    // if (AdadRandom === 4) {
    //     Tas.style.backgroundImage = 'url("/image/4.png")'
    //     Tas.innerText = "";
    // }
    // if (AdadRandom === 5) {
    //     Tas.style.backgroundImage = 'url("/image/5.png")'
    //     Tas.innerText = "";
    // }
    // if (AdadRandom === 6) {
    //     Tas.style.backgroundImage = 'url("/image/6.jpg")'
    //     Tas.innerText = "";
    // }

    if (newPosition > MaxOfPosition) {

        return;
    }
    // tarif kardan nardeboomha
    if (newPosition === 2) {
        newPosition = 24;
    };
    if (newPosition === 17) {
        newPosition = 39;
    };
    if (newPosition === 27) {
        newPosition = 82;
    };
    if (newPosition === 46) {
        newPosition = 89;
    };
    if (newPosition === 43) {
        newPosition = 54;
    };
    if (newPosition === 52) {
        newPosition = 84;
    };
    if (newPosition === 73) {
        newPosition = 82;
    };



    // tarif marha
    if (newPosition === 33) {
        newPosition = 15
    };
    if (newPosition === 59) {
        newPosition = 50;
    };

    if (newPosition === 67) {
        newPosition = 10;
    };
    if (newPosition === 71) {
        newPosition = 31;

    };
    if (newPosition === 87) {
        newPosition = 53;
    };
    if (newPosition === 98) {
        newPosition = 79;
    };
    if (newPosition === 94) {
        newPosition = 83;
    };
    // document.getElementById(currentPosition).style.backgroundColor = "";

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