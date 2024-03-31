let star1= document.querySelectorAll(".fa-star")
let emujiEl= document.querySelectorAll('.far')
let colorArray= ['red', 'yellow','lightgreen','lightseagreen', 'green'];
updateRatings(0)
star1.forEach((star1,index)=>{
    star1.addEventListener('click',()=>{
        updateRatings(index)
    })
})

function updateRatings (index){
    star1.forEach((star1, indx) =>{
        if(indx<index+1){
            star1.classList.add("active")
        }
        else{
            star1.classList.remove('active')
        }
    })
    emujiEl.forEach((emujiEl)=>{
        emujiEl.style.transform= `translateX(-${index*50}px)`;
        emujiEl.style.color= colorArray[index];
    })
}