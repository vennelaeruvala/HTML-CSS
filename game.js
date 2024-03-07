let boxes = document.querySelectorAll(".box");
let newBtn=document.querySelector("#newGame");
let resetBtn=document.querySelector("#resetGame");
let msgContainer=document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let turn0 = true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
function showWinner(player){
    msg.innerHTML=`Congratulations, Winner${player}`;
    msgContainer.classList.remove("hide");
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
function checkWinner(){
    for (let pattern of winPatterns){
       let posValue1=boxes[pattern[0]].innerText;
       let posValue2=boxes[pattern[1]].innerText;
       let posValue3=boxes[pattern[2]].innerText;
       if(posValue1!="" && posValue2!="" && posValue3!="" )
       if(posValue1===posValue2 && posValue2==posValue3){
           disableBoxes();
            showWinner(posValue1);
       }
    }
   
}
let count=0;
boxes.forEach(box => {
    box.addEventListener("click",()=>{
       if(turn0){
        box.innerText="0";
        turn0=false
        count+=1;
       }
       else{
        box.innerText="X";
        turn0=true;
        count+=1;
       }
       box.disabled=true;
       checkWinner();
    })
});
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

