let xml

let output = document.getElementById("output")
let fileChoose = document.getElementById("fileChoose")
let printButton = document.getElementById("print")
fileChoose.addEventListener("change", readFile)
printButton.addEventListener("click", print)

function readFile() {
    var files = fileChoose.files
    var reader = new FileReader()
    var file = files[0]
    reader.readAsText(file)
    reader.onload = function (e) {
        xml = e.target.result
    }
}

function print() {
    if (window.DOMParser) {
        parser = new DOMParser()
        xmlDoc = parser.parseFromString(xml, "text/xml")
    } else {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM")
        xmlDoc.async = false
        xmlDoc.loadXML(xml)
    }

    let lastName = xmlDoc.getElementsByTagName("last-name")
    let name = xmlDoc.getElementsByTagName("name")
    let patronymic = xmlDoc.getElementsByTagName("patronymic")
    let averageMark = xmlDoc.getElementsByTagName("average-mark")
    let birth = xmlDoc.getElementsByTagName("birth")
    let newElement = document.createElement("div")

    newElement.innerHTML = ( "Фамилия: " + lastName[0].innerHTML 
        + "<br /> Имя : " + name[0].innerHTML 
        + "<br /> Отчество : " + patronymic[0].innerHTML
        + "<br /> Средний балл: " + averageMark[0].innerHTML 
        + "<br /> Год рождения : " + birth[0].innerHTML 
        + "<br />&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;&#9552;")
        
    output.appendChild(newElement)
}