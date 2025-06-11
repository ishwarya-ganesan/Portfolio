function active(id){
    let navbar = document.querySelectorAll(".nav");
    for(let data of navbar){
        data.classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
}

const input = document.querySelector('.range');
const number = document.querySelector('.number');
input.addEventListener("input",()=>{
    input.value = "90";
}) 

let upperTriangle = document.getElementsByClassName("upperTriangle")[0];
let lowerTriangle = document.getElementsByClassName("lowerTriangle")[0];

let getScreenWidth = () =>{
    if(screen.width > 300 && screen.width < 900){
        upperTriangle.classList.remove("upperTriangle");
          lowerTriangle.classList.remove("lowerTriangle");
    }else{
          upperTriangle.classList.add("upperTriangle");
          lowerTriangle.classList.add("lowerTriangle");
    }
    
}

getScreenWidth();