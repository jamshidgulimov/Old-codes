// const { rejects } = require("assert")
// const { log } = require("console")
// const { resolve } = require("path")

// api
const API = 'https://randomuser.me/api/?results=9'

const loadingTogle = (toggle) =>{
if(toggle){
    overlay.classList.remove('hidden')
}else{
    overlay.classList.add('hidden')

}
}

// for leader
const overlay = document.getElementById('overlay')

const getData = (resourse) =>{
    return new Promise((resolve, rejects) =>{
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () =>{
    if(request.readyState < 4){
        loadingTogle(true)
    }
    else if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText)
        resolve(data.results)
        loadingTogle(false)

    }
    else if(request.readyState == 4){
        rejects('Error!!!')
        loadingTogle(false)

    }
})

request.open('GET', resourse)
request.send()
    })
}
const reload = () =>{
    getData(API).then((data)=>{
        updateUi(data);
    })
    .catch((err)=>{
        console.log(err);
    })
}

document.addEventListener('DOMContentLoaded', reload)
