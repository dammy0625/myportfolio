const slider =document.querySelector(".slider")
const skills =document.querySelector("#skills")
const skilu =document.querySelector("#skills ul")
const inside =document.querySelector(".inside")
const ham =document.querySelector(".ham")
const got =document.querySelector(".go-to")
const move =document.querySelector(".move")
const fove =document.querySelector(".fove")
const cove =document.querySelector(".cove")
const pleft =document.querySelector(".pleft")
const fleft =document.querySelector(".fleft")
const cleft =document.querySelector(".cleft")
const hmed =document.querySelector(".hmed")
const fmed =document.querySelector(".fmed")
const cmed =document.querySelector(".cmed")
const hme =document.querySelector(".hme")
const fme =document.querySelector(".fme")
const cme =document.querySelector(".cme")

skills.onclick=(e)=>{
    slider.classList.toggle("slid")
    if(e.target.innerText === "Javascript"){
inside.innerHTML = "javascript..<br><br>i am a huge vanilla js fan<br>i make good use of it in adding  interactivity to enable visitors have a good user experience "
    }else if(e.target.innerText === "Html"){
        inside.innerHTML = "Html..<br><br>i use this in building of the skeletal structure of a web-page/app "
    }else if(e.target.innerText === "Css"){
        inside.innerHTML = "Css..<br><br>this is the main aspect of a good user interface..<br>i use this in transforming mockups into desired user-interfaces<br>also to make pages responsive to different screen sizes "
    }else if(e.target.innerText === "Scss"){
        inside.innerHTML = "Scss..<br><br>this a css pre-processor which adds several functionalities to writing css<br><br>functionalities like the ability to use variables and functions (mixins) in a stylesheet<br>also adds cross browser compatibility to stylesheets (with live sass compiler on vs code)"
    }else if(e.target.innerText === "Git / Github"){
        inside.innerHTML = "Git..<br><br>i use git for the purpose of version control<br> and also to save my projects to its repository in order to push to a remote repository (github)"
    }else if(e.target.innerText === "Vue Js"){
        inside.innerHTML = "vue js..<br><br>a front end framework i personally like<br>i like because it can be used in a project in different ways.<br>like installing it with a package manager or installing it using a cdn,...<br> also with it's features like, ability to bind data to a variable... to it's ability to use features like re-useable componenets,,and also its easy to use in-built directives"
    }else if(e.target.innerText == "Basic Node Js"){
        inside.innerHTML = "i am currently taking tutorials on this<br><br>i have the basic general knowledge of how the back-end works<br>using the three main tools... the server and a back-end app used the query the database<br>i believe it is ideal for me to broaden myself by learning node since i have a good knowledge of javascript  "
    }else if(e.target.innerText == "Basic Sql"){
        inside.innerHTML = "a server-side querying language used by the server in querying a sql supported RDBMS<br>using statements like<br>select,from.where,insert-into,create dtable ,etc"
    }else if(e.target.innerText == "Photography"){
        inside.innerHTML = "photography is both an hobby and a skill to me"
    }else{
        inside.innerHTML = "please click on skill to read on it"
    }

}

slider.onclick=()=>{
    slider.classList.remove("slid")
}


ham.onclick=()=>{
    got.classList.toggle("got")
    
}
got.onclick = ()=>{
    got.classList.remove("got")
}
var mover = -200
pleft.onclick=()=>{
    
    move.style.cssText ="transform:translateX("+ mover + "px)"
    mover+=-200
    
    if(mover === -600){
        hmed.innerHTML = "the decription page<br>here, you get to see a larger size of the art you click on<br>you also get to read the artist's description <br>and also get options to either 'add-to-cart' or 'checkout' &#129297"
    }else if(mover === -400){
        hmed.innerHTML = "the art store page<br> by clicking on 'buy' a slider slides in with a background of the art you clicked on<br>also with the artist description<br>and with options to 'add-to-cart' or 'checkout' &#128536"
    }else if(mover === -800){
        hmed.innerHTML = "the cart page<br>by clicking on 'add-to-cart' in the previous page, you get a smooth slide-in page <br>which shows you the number of art pieces you have in your cart<br>you also get the options to either checkout or return to art store page(by clicking on the 'x' symbol)&#129300"
    }else if(mover === -1000){
        hmed.innerHTML = "the checkout page<br>you get the total of the art piece you are about to checkout<br>you are are to input 'dummy' credit card and cvv number<br>by clicking on the telephone icon,you are asked if you will like to get the artist's number<br>by clicking on the mail icon,you are asked if you will like to get the artist's e-mail address<br>and by clicking on the star icon, you are asked if you will like to go back to the art store page &#129313 "
    }else if(mover === -1200){
        hmed.innerHTML = "you get a promp if you try paying without inputing a 'dummy' credit card or cvv number &#128544"
    }else if(mover === -1400){
        hmed.innerHTML = "after inputing a 'dummy' credit card number you are then asked to confirm payment &#129297"
    }else if(mover === -1600){
        hmed.innerHTML = "on confirming payment <br> you get a fake debit alert "
    }
    else{
        hmed.innerHTML = "a simple home page with a linear-gradient background<br><br>by clicking 'go inside ..' you get a smooth fade-in into the art store "
    }
    if(mover === -1600){
        mover = 0
    }
}
var fover = -200
fleft.onclick =()=>{
    
    fove.style.cssText = "transform:translateX("+ fover + "px)"
    fover+= -200
    
    if(fover === -400){
        fmed.innerHTML = "trying to submit wrong informations will cause error messages to appear"
    }else if(fover === -600){
        fmed.innerHTML = "submitting the right/correct info will prompt if you really want to submit<br>on clicking 'ok' the form finally submits  "
    }
    else{
        fmed.innerHTML = " The home-page where you are to input you<br>5-digit username<br>valid e-mail address (yh..it knows an invalid e-mail address)<br>and an 8 digit password<br><br>you can test the functionalities  by providing wrong data"
    }
    if(fover === -600){
        fover = 0
    }
}

var cover = -200
cleft.onclick = ()=>{
    
    cove.style.cssText = "transform:translateX("+ cover + "px)"
    cover+= -200
    
    if(cover == -400){
        cmed.innerHTML = "by clicking on the menu bar ,you get options to change the background color of the app"
    }else if(cover == -600){
        cmed.innerHTML ="clicking on the black selection box will give options<br>on the type of calculation you would like carry out"
    }else if(cover == -800){
        cmed.innerHTML = "after inputing your values and selecting the type of operation you want <br>by clicking result,you get the correct value below"
    }else{
        cmed.innerHTML = "the home page of the calculator"
    }
    if(cover === -800){
        cover = 0
    }
}

