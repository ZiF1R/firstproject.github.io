// 3 lw
const newDocBtn = document.querySelectorAll('.new-doc-btn')
const newDoc = document.querySelectorAll('.new-document-area')

function array_max_min() {
    let array = new Array(
		6*Math.pow(Math.PI,2) + 3*Math.pow(Math.E,8),
		2*Math.cos(4) + Math.cos(12) + 8*Math.pow(Math.E,3),
		3*Math.sin(9) + Math.log(5) + Math.sqrt(3),
		2*Math.tan(5) + 6*Math.PI + Math.sqrt(12)
    )
	
    let max = Math.max(array[0],array[1],array[2],array[3])
	let maxIndex = array.indexOf(max)
 
    alert("Максимальный элемент массива находится под индексом " + maxIndex  
         + " и равен " + max)
 
    let min = Math.min(array[0],array[1],array[2],array[3])
	let minIndex = array.indexOf(min)
 
    alert("Минимальный элемент массива находится под индексом " + minIndex
         + " и равен " + min)
}
 
function array_methods() {
    let array = new Array(" pow", " pop", " push", " shift", " round", " floor", " slice", " sort")
    alert("Исходный массив: " + array)
 
    let math_methods = new Array()
    let array_methods = new Array()
   
   array_methods = array_methods.concat("concat", array.slice(1,4), array.slice(6,8))                        
   math_methods = math_methods.concat("sqrt", array.slice(0,1), array.slice(4,6))

    alert("Массив методов объекта Array: " + array_methods)
    alert("Массив методов объекта Math: " + math_methods)
}
 
function string_method() {
    let str = new String ("Добриян Александр Витальевич")

    alert("Строка: " + str + "\nДлина строки: " + str.length 
    + "\nСтрока в верхнем регистре: " + str.toUpperCase() + "\nСтрока в нижнем регистре: " + str.toLowerCase())
 
    alert("Строка в формате ФИО: " + str.replace("Добриян Александр Витальевич", "ДАВ"))
}
 
// task 3
newDocBtn[0].onclick = () => {
   if(!(newDoc[0].classList.contains("new-document-area-active"))){
      let date = new Date()
      let period = new Array("Год", "Месяц", "День", "Час", "Минут", "Секунд")
   
      let year = date.getFullYear()
      let month = date.getMonth()
      let day = date.getDate()
      let hour = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()
   
      let methods = new Array(year, month + 1, day, hour, minute, second)

      let newTable = '<table class="table1">'
      for(let i = 0; i < period.length; i++){

         newTable += '<tr>'
         for(let j = 0; j < 1; j++){
            newTable += ('<th>' + period[i] + '</th>')
            newTable += ('<td>' + methods[i] + '</td>')
         }
         newTable += '</tr>'
      }

      newTable += '</table>'

      newDoc[0].innerHTML = newTable

      // применяем стили к документу
      newDoc[0].innerHTML += ('<style>' 
      + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; text-align: center; font-family: Courier, monospace; margin: 0; height: 40vh;}'
      +'.new-document-area{align-items: center;}'
      + '.table1 {display: flex; align-items: center; background: #e4ecff; color: #2972d1; padding: 7px; border-radius: 15px;}'
      + '.table1 td { min-width: 30px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700; }'
      + '.table1 th {background: #b0d9ff; min-width: 100px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700;}</style>')

      newDoc[0].classList.add("new-document-area-active")
   }
   else
      newDoc[0].classList.remove("new-document-area-active")
}