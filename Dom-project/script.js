const buttons=document.querySelectorAll(".button");
const body=document.body;

buttons.forEach((button)=>{
    button.addEventListener('click',function (e){
        console.log(e.target);
        if(e.target.id ==='grey')
        body.style.background=e.target.id
    else if(e.target.id ==='white')
        body.style.background=e.target.id
    else if(e.target.id ==='blue')
        body.style.background=e.target.id
    else if(e.target.id ==='yellow')
        body.style.background=e.target.id
    })
})