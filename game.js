const btns=document.querySelectorAll('.btn');
const reset=document.querySelector('.reset');
const newbtn=document.querySelector('#new');
const msg=document.querySelector('#msg');
const msgc=document.querySelector('.msgc');

let turnO=true;
const resetGame=()=>{
    
    turnO= true;
    enablebtn();
    msgc.classList.add("hide");

};
const winnerPatterns=[

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
     if(turnO){
       btn.innerHTML="X";
       turnO=false;

     }
     else{
        btn.innerHTML="O";
        turnO=true; 
     }
     btn.disabled=true;
     checkWinner();
    })
    
});
const disablebtn=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
}
const enablebtn=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerHTML="";
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulation! Winner is ${winner}`;
    msgc.classList.remove("hide");
    disablebtn();
    const changeText=function(){
       document.querySelector("#msg").innerHTML="Game Over!try again"
    }
    setTimeout(changeText,5000);
}

function checkWinner() {
    for (let pattern of winnerPatterns) {
        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log('Winner');
                showWinner(pos1Val);
            }
        }
    }
}

          newbtn.addEventListener("click",resetGame)
          reset.addEventListener("click",resetGame)