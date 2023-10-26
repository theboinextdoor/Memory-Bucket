const myBtn = document.querySelector(".btn");
const noteContainer = document.querySelector(".noteContainer");
let notes = document.querySelectorAll(".input-box");

function getData(){
    noteContainer.innerHTML = localStorage.getItem("data");
}
getData();

function showData(){
    localStorage.setItem("data", noteContainer.innerHTML);
}

myBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let image = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    image.src= "images/trash-bin.png";
    noteContainer.appendChild(inputBox).appendChild(image);
})

noteContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        showData();
    }else if(e.target.tagName === "P"){
        notes= document.querySelectorAll(".input-box");
        notes.forEach( nt=>{
            nt.onkeyup= function(){
                showData();
            }
        })
    }
})


