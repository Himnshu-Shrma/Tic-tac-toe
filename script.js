// console.log('hello');
// x or 0 is going 
// change x and 0
// check if user won

let player= 'X';
let gameOver = false;

const changePlayer= () => {
    return player === 'X' ? "O" : "X"; //change player

}

const checkwon =() =>{
 let boxTexts = document.getElementsByClassName("boxText");
    let winPos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];   
  winPos.forEach(ele => {
    if(boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText &&
        boxTexts[ele[1]].innerText === boxTexts[ele[2]].innerText &&
        boxTexts[ele[0]].innerText !==""){
            document.getElementById("result").innerText = boxTexts[ele[0]].innerText + " won";
            window.alert(boxTexts[ele[0]].innerText+ ' Won');
            gameOver=true;
            document.querySelector("img").style.width="100px";
        }
             
  });

};

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((box) => {//converts to array
    let boxText=box.querySelector(".boxText")
    box.addEventListener("click",()=> {
        if(boxText.innerText === "" && !gameOver){
        boxText.innerHTML= player;
        player = changePlayer(); // change from X to O
        checkwon();
        
        document.getElementsByClassName("player")[0].innerHTML = player;
        
        }

    
    });
});

//reset button function
let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click",()=> {
    let boxTexts = document.querySelectorAll(".boxText");
    boxTexts.forEach(boxText => {
        boxText.innerHTML = "";
    });
    player = "X";
    gameOver = false;
});
