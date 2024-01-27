let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetbtn");
let newbtn= document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO= true;
let clickcount=0;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
turnO=true;
enabledboxes();
msgcontainer.classList.add("hide")
clickcount=0;
}



boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O"
            box.style.color="#D7263D"
            turnO=false;
        }else{
            box.innerText="X"
            box.style.color="#62BBC1"
            turnO= true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disabledboxes= ()=>{
    for(let box of boxes ){
     box.disabled=true;
   
    }
 
 }
 
 const enabledboxes= ()=>{
     for(let box of boxes ){
      box.disabled=false;
      box.innerHTML="";
    
     }
 }



const showMessage=(winner)=>{
    msg.innerHTML=(`congratulations winner is ${winner}`);
    msgcontainer.classList.remove("hide");
}
const checkWinner=()=>{
    for(let patterns of winPatterns){
let pos1val=boxes[patterns[0]].innerText;
let pos2val= boxes[patterns[1]].innerText;
let pos3val=boxes[patterns[2]].innerText;
    
if(pos1val!=="" && pos2val!=="" && pos3val!==""){
    if(pos1val===pos2val && pos2val===pos3val){
        showMessage(pos3val);
        disabledboxes();
    }   else if(clickcount==9){
        msg.innerHTML="Match is draw";
        msg.classList.remove("hide");
       }
    }
    
}}



newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
