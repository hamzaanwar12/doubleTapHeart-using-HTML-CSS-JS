let div = document.querySelector(".container div")
console.log(div)

div.addEventListener("dblclick",(event)=>{
    console.log(event)
    createHeart(event);

})

let createHeart = (event)=>
{
    let heart = document.createElement(`i`);
    heart.classList.add("fa");
    heart.classList.add("fa-heart");
    console.log(event.target.offsetLeft)
    console.log(event.clientX)

    heart.style.top = `${event.clientY - event.target.offsetTop + 105}px`;
    heart.style.left = `${event.clientX - event.target.offsetLeft + 485}px`;
   
    console.log("left = : " + heart.style.left)
    console.log("top = : " + heart.style.top)
    
    div.appendChild(heart);
    setTimeout(()=>heart.remove(),0750)
}