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
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 60vh;}</style>')
    
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

function moveInit() {
    let img = document.getElementById("lineMove")
    let dx = 0
    let id = setInterval(frame, 5)

    function frame() {
        if (dx == 350)
            clearInterval(id)
        else {
            dx++
            img.style.left = dx + 'px'
        }
    }
}

function curveMove() {
    let x = 0
    let z = 400
    let id = document.getElementById("curveMove")
    let interval = setInterval(move, 2)

    function move(){
        if(x >= 400){
            z--
            let exprY = Math.sqrt(100*z)
            id.style.top = exprY + 'px'
            id.style.left = z + 'px'

            if(z == 0)
                clearInterval(interval)
        }
        else{
            x++
            let exprY = Math.sqrt(100*x)
            id.style.top = exprY + 'px'
            id.style.left = x + 'px'
        }
    }
}

function printGraph() {
    let x = 0
    let interval = setInterval(move, 0.01)

    function move(){
        if(x < 400){
            x++
            let exprY = Math.sqrt(100*x)
            let span = document.createElement('span')

            span.innerHTML =('<img src="../../../icons/list-icons/sub-item-marker.svg" style="position: absolute; top:' + exprY + newDocBtn[3].offsetTop+ 'px; left: ' + x + 'px; width: 2px; height: 2px;">')
            
            newDoc[3].appendChild(span)
        }
        else{
            clearInterval(interval)
        }
    }
}

function dropdown() {
    let item = document.querySelectorAll('#item')
        for(let i = 0; i < item.length; i++){
            item[i].children[1].style.height = 0
            item[i].children[1].style.opacity = 0
            item[i].children[1].style.overflow = 'hidden'
            item[i].addEventListener('mouseover', showMenu, false)
            item[i].addEventListener('mouseout', hideMenu, false)
        }

        function showMenu(){
            if(this.children.length > 1){
                this.children[1].style.height = 'auto'
                this.children[1].style.opacity = 1
                this.children[1].style.overflow = 'visible'
            }
            else
                return false
        }

        function hideMenu(){
            if(this.children.length > 1){
                this.children[1].style.height = 0
                this.children[1].style.opacity = 0
                this.children[1].style.overflow = 'hidden'
            }
            else
                return false
        }
}



