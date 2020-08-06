document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    console.log()

    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}