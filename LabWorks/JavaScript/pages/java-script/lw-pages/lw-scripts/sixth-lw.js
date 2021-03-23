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

let i = -1
let myWindow = new Array()
function myWindowOpen() {
    let newWindow = window.open("", "", "top=100, left=700, width=700, height=500")
    newWindow.document.write('<title>Название окна</title>')
    myWindow.push(newWindow)
    i++
}

function myWindowClose() {
    if (myWindow[i]){
        myWindow[i].close()
        myWindow.pop()
        i--
    }
}

function myWindowText() {
    myWindow[i].document.write('<p>Название окна</p>'
        + 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ipsum dicta, ipsam dolores similique repudiandae officiis. Harum deserunt ut consectetur incidunt, facilis architecto nemo commodi aperiam itaque officia. Maxime et nam, blanditiis nobis exercitationem atque optio qui, a magnam quia eligendi, reprehenderit quidem dolor laboriosam esse repellat? Voluptas, neque eveniet!')
}

newDocBtn[1].onclick = () => {
    if(!(newDoc[1].classList.contains("new-document-area-active"))){
        let methods = new Array(
            navigator.userAgent,
            navigator.appVersion,
            navigator.appName,
            navigator.appCodeName,
            navigator.platform,
            navigator.javaEnabled(),
            screen.width,
            screen.height,
            screen.colorDepth,
            history.length,
            location.href,
            location.pathname,
            location.host
        )

        let methodsName = new Array(
            "userAgent",
            "appVersion",
            "appName",
            "appCodeName",
            "platform",
            "javaEnabled()",
            "width",
            "height",
            "colorDepth",
            "length",
            "href",
            "pathname",
            "host"
        )

        let newTable = ('<table class="table1"><tr>'
            + '<th>Свойство</th>'
            + '<th>Значение</th></tr>')

        for(let i = 0; i < 13; i++){
            newTable += '<tr>'
            for(let j = 0; j < 1; j++){
                newTable += '<td>' + methodsName[i] + '</td>'
                newTable += '<td>' + methods[i] + '</td>'
            }
            newTable += '</tr>'
        }

        newTable += '</table>'

        newDoc[1].innerHTML = newTable

        // применяем стили к документу
        newDoc[1].innerHTML += ('<style>' 
            + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 60vh; word-break: break-all;}'
            +'.new-document-area{align-items: center;}'
            + '.table1 {display: flex; align-items: center; background: #e4ecff; color: #2972d1; padding: 7px; border-radius: 15px;}'
            + '.table1 td { min-width: 30px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700; }'
            + '.table1 th {background: #b0d9ff; min-width: 150px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700;}</style>')
    
        newDoc[1].classList.add("new-document-area-active")
    }
    else{
        newDoc[1].classList.remove("new-document-area-active")
    }
}