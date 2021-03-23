const newDocBtn = document.querySelectorAll('.new-doc-btn')
const newDoc = document.querySelectorAll('.new-document-area')

newDocBtn[0].onclick = () => {
    if(!(newDoc[0].classList.contains("new-document-area-active"))){
        // применяем стили к документу
        newDoc[0].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 20vh;}</style>')
    
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
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 20vh;}</style>')
    
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
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 20vh;}</style>')
    
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
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 20vh;}</style>')
    
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
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 25vh;}</style>')
    
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
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 25vh;}</style>')
    
        newDoc[5].classList.add("new-document-area-active")
    }
    else{
        newDoc[5].classList.remove("new-document-area-active")
    }
}

newDocBtn[6].onclick = () => {
    if(!(newDoc[6].classList.contains("new-document-area-active"))){
        // применяем стили к документу
        newDoc[6].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 25vh;}</style>')
    
        newDoc[6].classList.add("new-document-area-active")
    }
    else{
        newDoc[6].classList.remove("new-document-area-active")
    }
}

newDocBtn[7].onclick = () => {
    if(!(newDoc[7].classList.contains("new-document-area-active"))){
        // применяем стили к документу
        newDoc[7].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 40vh;}</style>')
    
        newDoc[7].classList.add("new-document-area-active")
    }
    else{
        newDoc[7].classList.remove("new-document-area-active")
    }
}

newDocBtn[8].onclick = () => {
    if(!(newDoc[8].classList.contains("new-document-area-active"))){
        // применяем стили к документу
        newDoc[8].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 20vh;}</style>')
    
        newDoc[8].classList.add("new-document-area-active")
    }
    else{
        newDoc[8].classList.remove("new-document-area-active")
    }
}

function colorChange() {
    document.querySelector('.onmouseover').style.color = 'red'
}

function fontChange() {
    document.querySelector('.mouseEvents').style.fontSize = '3.5vh'
}

function imgChange() {
    $('#img1').attr('src', '../icons/java-script.svg')
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

function moveInit(){
    $("#lineMove").animate({left: "+=200"}, 1000);
}

function curveMove() {
    let id = $('#curveMove')
    let x = 0
    let z = 400
    let interval = setInterval(move, 0)

    function move(){
        if(x >= 400){
            z--
            id.animate({
                top: Math.sqrt(100*z) + 'px',
                left: z + 'px'
            }, 0)

            if(z == 0)
                clearInterval(interval)
        }
        else{
            x++
            id.animate({
                top: Math.sqrt(100*x) + 'px',
                left: x + 'px'
            }, 0)
        }
    }
}

function dropdown() {
    let item = $('div#item')
        for(let i = 0; i < item.length; i++){
            item.eq(i).children().eq(1).fadeOut(0)
            item.eq(i).on('mouseover', showMenu)
            item.eq(i).on('mouseout', hideMenu)
        }

        function showMenu(){
            if(this.childElementCount > 1)
                $(this).children().eq(1).fadeIn(0)
            else
                return false
        }

        function hideMenu(){
            if(this.childElementCount > 1)
                $(this).children().eq(1).fadeOut(0)
            else
                return false
        }
}