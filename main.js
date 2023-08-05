//// Const ////
const body = document.querySelector('body')

// Modal
const modallogin = document.querySelector('#modallogin')
const logincontainer = document.querySelector('#logincontainer')
const signupcontainer = document.querySelector('#signupcontainer')
const signuplink = document.querySelector('#signuplink')
const loginlink = document.querySelector('#loginlink')

// First - nav
const logo = document.querySelector('#logo')
const news = document.querySelector('#news')
const buildguide = document.querySelector('#buildguide')
const helltide = document.querySelector('#helltide')
const auction = document.querySelector('#auction')
const party = document.querySelector('#party')
const map = document.querySelector('#map')
const loginbtn = document.querySelector('#loginbtn')

// Second -navbar
const newsnav = document.querySelector('#newsnav')
const buildguidenav = document.querySelector('#buildguidenav')
const helltidenav = document.querySelector('#helltidenav')
const auctionnav = document.querySelector('#auctionnav')
const partynav = document.querySelector('#partynav')
const mapnav = document.querySelector('#mapnav')

// Click
news.addEventListener('click', ()=>{
    newsnav.style.display = 'flex'
    buildguidenav.style.display = 'none'
    helltidenav.style.display = 'none'
    auctionnav.style.display = 'none'
    partynav.style.display = 'none'
    mapnav.style.display = 'none'
})
buildguide.addEventListener('click', ()=>{
    newsnav.style.display = 'none'
    buildguidenav.style.display = 'flex'
    helltidenav.style.display = 'none'
    auctionnav.style.display = 'none'
    partynav.style.display = 'none'
    mapnav.style.display = 'none'
})
helltide.addEventListener('click', ()=>{
    newsnav.style.display = 'none'
    buildguidenav.style.display = 'none'
    helltidenav.style.display = 'flex'
    auctionnav.style.display = 'none'
    partynav.style.display = 'none'
    mapnav.style.display = 'none'
})
auction.addEventListener('click', ()=>{
    newsnav.style.display = 'none'
    buildguidenav.style.display = 'none'
    helltidenav.style.display = 'none'
    auctionnav.style.display = 'flex'
    partynav.style.display = 'none'
    mapnav.style.display = 'none'
})
party.addEventListener('click', ()=>{
    newsnav.style.display = 'none'
    buildguidenav.style.display = 'none'
    helltidenav.style.display = 'none'
    auctionnav.style.display = 'none'
    partynav.style.display = 'flex'
    mapnav.style.display = 'none'
})
map.addEventListener('click', ()=>{
    newsnav.style.display = 'none'
    buildguidenav.style.display = 'none'
    helltidenav.style.display = 'none'
    auctionnav.style.display = 'none'
    partynav.style.display = 'none'
    mapnav.style.display = 'flex'
})

// Modal
loginbtn.addEventListener('click', ()=>{
    modallogin.style.display = 'flex';
    logincontainer.style.display = 'flex';
    signupcontainer.style.display = 'none';
})
signuplink.addEventListener('click', ()=>{
    logincontainer.style.display = 'none';
    signupcontainer.style.display = 'flex';
})
loginlink.addEventListener('click', ()=>{
    logincontainer.style.display = 'flex';
    signupcontainer.style.display = 'none';
})

window.addEventListener('click', e=>{
    if(e.target === modallogin){
        modallogin.style.display = 'none';
    }
    console.log(e.target)
})