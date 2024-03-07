const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const localData = localStorage.getItem('mode')
if(localData){
    body.classList.add('dark-mode')
    lightBtn.classList.toggle('hidden')
    darkBtn.classList.toggle('hidden')
}


const classTogl = ()=>{
    lightBtn.classList.toggle('hidden')
    darkBtn.classList.toggle('hidden')
}

darkBtn.addEventListener('click', () =>{
   classTogl()
    body.classList.add('dark-mode')
    localStorage.setItem('mode', 'dark-mode')
})

lightBtn.addEventListener('click', () =>{
    classTogl()
    body.classList.remove('dark-mode')
    localStorage.setItem('mode', '')

})