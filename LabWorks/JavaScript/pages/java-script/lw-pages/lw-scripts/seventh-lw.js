const newDocBtn = document.querySelectorAll('.new-doc-btn')
const newDoc = document.querySelectorAll('.new-document-area')

newDocBtn[0].onclick = () => {
    if(!(newDoc[0].classList.contains("new-document-area-active"))){
        // применяем стили к документу
        newDoc[0].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 60vh;}</style>')
    
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

function printText() {
    let speciality = document.forms[1].speciality
    let course = document.forms[1].course
    let subject = document.forms[1].subject

    for(let i = 0; i < speciality.length; i++)
        if(speciality[i].selected)
            speciality = speciality[i].innerHTML

    for(let i = 0; i < course.length; i++)
        if(course[i].checked)
            course = course[i].value

    let subjectList = '<ul>'
    for(let i = 0; i < subject.length; i++)
        if(subject[i].checked)
            subjectList += ('<li>' + subject[i].value + '</li>')
    subjectList += '</ul>'
    
    newDoc[1].innerHTML += ('<span class="printText">' + 
    document.forms[1].fuculty.value + '</span>'
    + 'Студент ' + document.forms[1].elements[2].value
    + ' специальность "' + speciality
    + '" курс ' + course + ' должен сдавать следующие предметы:<br>'
    + subjectList)

    newDoc[1].innerHTML += ('<style>.printText{margin-top: 5vh;}</style>')
}

// function reset() {
//     let resetBtn = document.querySelector('input[value="Reset"]')

//     resetBtn.onclick = () => {
//         let input = document.querySelectorAll('input')
//         input.value = ''
//         newDoc[1].innerHTML = ('<style>'
//             +'.printText{ display: none; }</style>')
//     }
// }


newDocBtn[2].onclick = () => {
    if(!(newDoc[2].classList.contains("new-document-area-active"))){
        let subjectList = document.querySelector('.subjectList')
        let subject = document.forms[0].subject

        for(let i = 0; i < subject.length; i++)
            if(subject[i].checked){
                let span = document.createElement('span')
                span.innerHTML = subject[i].value + '<br>'
                subjectList.appendChild(span)
            }

        // применяем стили к документу
        newDoc[2].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 30vh;}</style>')
    
        newDoc[2].classList.add("new-document-area-active")
    }
    else{
        newDoc[2].classList.remove("new-document-area-active")
    }
}