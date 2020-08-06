document.querySelector("#add-time")
.addEventListener('click' , cloneField)

function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) 
    
    const 

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}