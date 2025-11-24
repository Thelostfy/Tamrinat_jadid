let gameboard = document.getElementById("GameBoard");



let CreateTable = () => {
    for (let i = 0; i < 10; i++) {

        let createTr = document.createElement("tr");
        createTr.className = 'TRClass';

        for (let j = 0; j < 10; j++) {

            let createTd = document.createElement("td");
            createTd.className = "TdClass";
            let Id = `${i}-${j}`;// i شده سطر و جی شده ستون 
            createTd.id = Id;


            // id ro be zoj va fard taghsim mikonim
            // let zoj = i / 2 === 0;
            // if ((i+j) % 2 === 0) {
            //     createTd.style.backgroundColor = "blue";
            // }
            // else(
            //     createTd.style.backgroundColor = "red"

            // )


            createTd.addEventListener("click", () => {
                createTd.style.backgroundColor = "red";
            })
            // let mouseHover = createTd.addEventListener("mouseover", () => {
            //     createTd.style.backgroundColor = "white";



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
CreateTable()