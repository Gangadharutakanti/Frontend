let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector(".reset-button");
let para=document.querySelector("#para");
let gamecontainer=document.querySelector(".game-continer");
let newButton=document.querySelector("#new-game");
const wins=[[0,1,2],[3,4,5],[6,7,8],[1,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,3,6]]

let Turn=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(Turn){
        box.innerText="X";
        Turn=false;}
        else{
        box.innerText="O";
        Turn=true;
        }
        box.disabled=true;
        checkwinner();
    });
    
});
resetButton.addEventListener("click",()=>{
    
        boxes.forEach((box)=>{
            box.innerText="";
        })
        boxes.forEach((box)=>{
        box.disabled=false;
        });
        gamecontainer.classList.add("hide");

    }
)
 
 let checkwinner=()=>{
    for(let pattern of wins){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            showwinner(pos1);
        }
    }
    }
 }
 let showwinner=(winner)=>{
    para.innerText=`congratulations! the winner is${winner}`;
    gamecontainer.classList.remove("hide");
 }

 newButton.addEventListener("click",()=>{
    
    boxes.forEach((box)=>{
        box.innerText="";
    })
    boxes.forEach((box)=>{
    box.disabled=false;
    });
    gamecontainer.classList.add("hide");

});

