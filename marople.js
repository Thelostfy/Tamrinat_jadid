let gameboard = document.getElementById("GameBoard");
let Tas = document.getElementById("Tas");
let currentPosition = 0;
let MaxOfPosition = 99;


let CreateTable = () => {
    let id = 0;
    for (let i = 0; i < 10; i++) {


        let createTr = document.createElement("tr");
        createTr.className = 'TRClass';







        for (let j = 0; j < 10; j++) {

            let createTd = document.createElement("td");
            createTd.className = "TdClass";
            createTd.id = id;
            id++;
            // let Tds = document.getElementsByClassName("TdClass");
            let Tds = document.getElementsByTagName("td");
            //  console.log(Tds.length);

            // for (let c = 0; c < Tds.length; c++) {

            //     console.log(Tds);



            // id ro be zoj va fard taghsim mikonim
            // let zoj = i % 2 === 0;




            createTd.addEventListener("click", () => {
                createTd.style.backgroundColor = "red";
            })
            // let mouseHover = createTd.addEventListener("mouseover", () => {
            //     createTd.style.backgroundColor = "white";

            // if (i  % 2 === 0) {
            //     createTr.classList.add("ZojClass");
            // }
            // else {
            //     createTr.classList.add("FardClass");
            // }


            //     // createTd.innerText = Id;
            // })


            // let mouseOutRang = createTd.addEventListener("mouseout", ()=>{
            //     createTd.style.backgroundColor = "";

            // })

            createTr.appendChild(createTd);
        }



        gameboard.appendChild(createTr);
    }
}

Tas.addEventListener("click", () => {
    let AdadRandom = Math.floor(Math.random() * 6) + 1;
    console.log(AdadRandom);

    let newPosition = currentPosition + AdadRandom;

    if (newPosition > MaxOfPosition) {
        alert("Move exceeds board limits!");
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
    if (newPosition === 32) {
        newPosition = 14
    };
    if (newPosition === 58) {
        newPosition = 49;
    };

    if (newPosition === 66) {
        newPosition = 9;
    };
    if (newPosition === 70) {
        newPosition = 30;

    };
    if (newPosition === 86) {
        newPosition = 52;
    };
    if (newPosition === 97) {
        newPosition = 78;
    };
    if (newPosition === 93) {
        newPosition = 82;
    };
    document.getElementById(currentPosition).style.backgroundColor = "";

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