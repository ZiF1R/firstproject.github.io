const newDocBtn = document.querySelectorAll('.new-doc-btn')
const newDoc = document.querySelectorAll('.new-document-area')

newDocBtn[0].onclick = () => {
    if(!(newDoc[0].classList.contains("new-document-area-active"))){
        // применяем стили к документу
        newDoc[0].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 60vh;}'
            +'.new-document-area{align-items: flex-start;}</style>')
    
        newDoc[0].classList.add("new-document-area-active")
    }
    else{
        // newDoc[0].innerHTML = ''
        newDoc[0].classList.remove("new-document-area-active")
    }
}

newDocBtn[1].onclick = () => {
    if(!(newDoc[1].classList.contains("new-document-area-active"))){
        let docElem = document.body.childNodes

        for(let i = 0; i < docElem.length; i++){
            newDoc[1].innerHTML += ("Дочерний элемент: " + (docElem[i].tagName || 'TEXT') 
                + '<br>Номер: ' + docElem[i].nodeType
                + '<br><br>')
        }
 
        // применяем стили к документу
        newDoc[1].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 40vh;}'
            +'.new-document-area{align-items: flex-start;}</style>')
    
        newDoc[1].classList.add("new-document-area-active")
    }
    else{
        newDoc[1].innerHTML = ''
        newDoc[1].classList.remove("new-document-area-active")
    }
}

newDocBtn[2].onclick = () => {
    if(!(newDoc[2].classList.contains("new-document-area-active"))){
        let text;

        // через коллекцию all
        let collection = document.all
        for(let i = 0; i < collection.length; i++){
            if(collection[i].tagName == "SPAN"){
                text = ("Содержимое первого элемента 'span' через коллекцию all: " 
                    + collection[i].innerHTML + '<br>')
                break
            }
        }

        // через частную коллекцию span
        collection = document.getElementsByTagName('span')
        text += ("Содержимое первого элемента 'span' через частную коллекцию: " 
            + collection[0].innerHTML + '<br>')

        // через идентификатор элемента
        let firstSpan = document.getElementById('firstSpan')
        text += ("Содержимое первого элемента 'span' через идентификатор элемента: " 
            + firstSpan.innerHTML + '<br>')

        newDoc[2].innerHTML += text

        // применяем стили к документу
        newDoc[2].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 20vh;}'
            +'.new-document-area{align-items: flex-start;}</style>')
    
        newDoc[2].classList.add("new-document-area-active")
    }
    else{
        newDoc[2].classList.remove("new-document-area-active")
        // newDoc[0].innerHTML = ''
    }
}

newDocBtn[3].onclick = () => {
    if(!(newDoc[3].classList.contains("new-document-area-active"))){
        let marks = document.querySelectorAll('.mark')
        let span = document.getElementsByTagName('span')[1]

        let average = 0;
        for(let i = 0; i < marks.length; i++){
            average += Number.parseInt(marks[i].innerHTML)
        }

        let result =  (average / marks.length)

        span.innerHTML += ' Средний балл: ' + result

        // применяем стили к документу
        newDoc[3].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 50vh;}'
            +'.new-document-area{align-items: center;}'
            + '.table1 {display: flex; align-items: center; background: #e4ecff; color: #2972d1; padding: 7px; border-radius: 15px;}'
            + '.table1 td { min-width: 30px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700; }'
            + '.table1 th {background: #b0d9ff; min-width: 100px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700;}</style>')
    
        newDoc[3].classList.add("new-document-area-active")
    }
    else{
        let span = document.getElementsByTagName('span')[1]
        span.innerHTML = 'Цель работы'
        newDoc[3].classList.remove("new-document-area-active")
    }
}
