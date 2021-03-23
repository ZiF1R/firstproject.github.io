const newDocBtn = document.querySelectorAll('.new-doc-btn')
const newDoc = document.querySelectorAll('.new-document-area')

newDocBtn[0].onclick = () => {
    if(!(newDoc[0].classList.contains("new-document-area-active"))){

        // применяем стили к документу
        newDoc[0].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 30vh;}</style>')
    
        newDoc[0].classList.add("new-document-area-active")
    }
    else{
        newDoc[0].classList.remove("new-document-area-active")
    }
}

newDocBtn[1].onclick = () => {
    if(!(newDoc[1].classList.contains("new-document-area-active"))){

        // применяем стили к документу
        newDoc[1].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 30vh;}</style>')
    
        newDoc[1].classList.add("new-document-area-active")
    }
    else{
        newDoc[1].classList.remove("new-document-area-active")
    }
}

newDocBtn[2].onclick = () => {
    if(!(newDoc[2].classList.contains("new-document-area-active"))){
        // применяем стили к документу
        newDoc[2].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 30vh;}</style>')
    
        newDoc[2].classList.add("new-document-area-active")
    }
    else{
        newDoc[2].classList.remove("new-document-area-active")
    }
}

newDocBtn[3].onclick = () => {
    if(!(newDoc[3].classList.contains("new-document-area-active"))){
        // применяем стили к документу
        newDoc[3].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 30vh;}</style>')
    
        newDoc[3].classList.add("new-document-area-active")
    }
    else{
        newDoc[3].classList.remove("new-document-area-active")
    }
}

newDocBtn[4].onclick = () => {
    if(!(newDoc[4].classList.contains("new-document-area-active"))){
        // применяем стили к документу
        newDoc[4].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 30vh;}</style>')
    
        newDoc[4].classList.add("new-document-area-active")
    }
    else{
        newDoc[4].classList.remove("new-document-area-active")
    }
}

newDocBtn[5].onclick = () => {
    if(!(newDoc[5].classList.contains("new-document-area-active"))){
        // применяем стили к документу
        newDoc[5].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 30vh;}</style>')
    
        newDoc[5].classList.add("new-document-area-active")
    }
    else{
        newDoc[5].classList.remove("new-document-area-active")
    }
}

function colorChange() {
    document.querySelector('.onmouseover').style.color = 'red'
}

function fontChange() {
    document.querySelector('.mouseEvents').style.fontSize = '3.5vh'
}

function imgChange() {
    document.getElementById('img1').src = "../icons/java-script.svg"
}

function tagChange() {
    document.getElementById('paragraph1').innerHTML = ('<img src="../icons/java-script.svg">'
            + '<style>#paragraph1{display: flex; width: 10%; height: 40%;}</style>')
}

function imgWidthChange() {
    let img = document.getElementById('img2')

    img.style.width = (17 + "vh")
    img.style.height = (17 + "vh")

    img.onmouseout = () => {
        img.style.width = (14 + "vh")
    }
}

function borderChange() {
    document.getElementById('paragraph2').style.border = '1vh solid lightblue'
}