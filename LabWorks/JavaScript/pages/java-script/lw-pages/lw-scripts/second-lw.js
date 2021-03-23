// 2 lw
const newDocBtn = document.querySelectorAll('.new-doc-btn')
const newDoc = document.querySelectorAll('.new-document-area')

// task 1
newDocBtn[0].onclick = () => {
   newDoc[0].classList.toggle("new-document-area-active")

   newDoc[0].innerHTML = '<div class="className1">Текст</div>'
                     + '<style>.className1{color: #ffae00;'
                     + 'font-family: monospace; font-size: 24px;}'
                     + '.new-document-area-active {background: #f9f9f9;}'
                     +'.new-document-area{align-items: flex-start;}</style>'
}

// task 2
newDocBtn[1].onclick = () => {
   if(!(newDoc[1].classList.contains("new-document-area-active"))){
      let a = prompt('Введите количество строк', '0')
      let b = prompt('Введите количество столбцов', '0')

      a = Number.parseInt(a)
      b = Number.parseInt(b)

      // начало таблицы
      let newTable = "<table class='table1'>"

      for(let row = 1; row <= a; row++)
      {
         // начало строки
         newTable += "<tr>"
         for(let column = 1; column <= b; column++)
            newTable += "<td>" + (row*column) + "</td>" // создаем ячейку таблицы

         // конец строки
         newTable += "</tr>"
      }

      // конец таблицы
      newTable += "</table>"

      newDoc[1].innerHTML = newTable

      // применяем стили к документу
      newDoc[1].innerHTML += ('<style>' 
         + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; text-align: center; font-family: Courier, monospace; margin: 0; height: 60vh;}'
         +'.new-document-area{align-items: center;}'
         + '.table1 {display: flex; align-items: center; background: #e4ecff; color: #2972d1; padding: 7px; border-radius: 15px;}'
         + '.table1 td { min-width: 30px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700; }</style>')

      newDoc[1].classList.add("new-document-area-active")
   }
   else
      newDoc[1].classList.remove("new-document-area-active")
}

// task 3
newDocBtn[2].onclick = () => {
   if(!(newDoc[2].classList.contains("new-document-area-active"))){
      let a = prompt('Введите минимальный радиус', '0')
      let b = prompt('Введите максимальный радиус', '0')

      a = Number.parseInt(a)
      b = Number.parseInt(b)

      let newTable = ('<table class="table1"><tr>'
      + '<th>Радиус</th>'
      + '<th>Площадь круга</th>'
      + '<th>Длина окружности</th></tr>'
      + '<tr>'
      + '<th>Формула</th>'
      + '<th>&#960;r<sup>2</sup></th>'
      + '<th>2&#960;r</th></tr>')

      do {
         newTable += ('<tr>'
         + '<td>'+ a.toFixed(1) + '</td>'
         + '<td>' + (Math.round(Math.PI*(a*a))) + '</td>'
         + '<td>' + (Math.round(2*Math.PI*a)) + '</td></tr>')
   
         a += 0.3
      }
      while (a <= b)

      newTable += '</table>'

      newDoc[2].innerHTML = newTable

      // применяем стили к документу
      newDoc[2].innerHTML += ('<style>' 
      + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; text-align: center; font-family: Courier, monospace; margin: 0; height: 60vh;}'
      +'.new-document-area{align-items: center;}'
      + '.table1 {display: flex; align-items: center; background: #e4ecff; color: #2972d1; padding: 7px; border-radius: 15px;}'
      + '.table1 td { min-width: 30px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700; }'
      + '.table1 th {background: #b0d9ff; min-width: 100px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700;}</style>')

      newDoc[2].classList.add("new-document-area-active")
   }
   else
      newDoc[2].classList.remove("new-document-area-active")
}
 
// task 4
newDocBtn[3].onclick = () => {
   if(!(newDoc[3].classList.contains("new-document-area-active"))){
      let doubleNum = new Number(125.625)
      let integerNum = new Number(77)
   
      let nameMethodsDouble = new Array("toString(16)", "toPrecision(7)", "toFixed(5)", "toExponential(5)")
   
      let m_string_double = doubleNum.toString(16)
      let m_precision_double = doubleNum.toPrecision(7)
      let m_fixed_double = doubleNum.toFixed(5)
      let m_exponencial_double = doubleNum.toExponential(5)
      let doubleMethods = new Array(m_string_double, m_precision_double, m_fixed_double, m_exponencial_double)
   
      let descriptionMethodsDouble = new Array("Строковое представление числа в 16-ричной системе счисления",
      "Представляем число с заданным общим количеством значащих цифр",
      "Представляем число в форме с фиксированным количеством цифр после точки",
      "Представляем число в экспоненциальной форме, с определенным количеством цифр после точки")
   
      let nameMethodsInt = new Array("toString(2)", "toPrecision(5)", "toFixed(1)", "toExponential(6)")
   
      let m_string_int = integerNum.toString(2)
      let m_precision_int = integerNum.toPrecision(5)
      let m_fixed_int = integerNum.toFixed(1)
      let m_exponencial_int = integerNum.toExponential(6)
      let intMethods = new Array(m_string_int, m_precision_int, m_fixed_int, m_exponencial_int)
      
      let descriptionMethodsInt = new Array("Строковое представление числа в 2-чной системе счисления",
      "Представляем число с заданным общим количеством значащих цифр",
      "Представляем число в форме с фиксированным количеством цифр после точки",
      "Представляем число в экспоненциальной форме, с определенным количеством цифр после точки")

      // начало таблицы
      let newTable = ('<table class="table1"><tr>'
      + '<th>Число</th>'
      + '<th>Метод</th>'
      + '<th>Результат</th>'
      + '<th>Описание метода</th></tr>')

      for(let number = 0; number < 2; number++)
      {
         if(number == 0)
         {
            for(let row = 0; row < 4; row++)
            {
               newTable += '<tr>'
               for(let cell = 1; cell < 5; cell++)
               {
                  switch(cell){
                     case 1: switch(row) { 
                        case 0: newTable += ('<td rowspan=4>' + doubleNum + '</td>'); continue
                        default: newTable += ''; continue
                     }
                     case 2: newTable += ('<td>' + nameMethodsDouble[row] + '</td>'); continue
                     case 3: newTable += ('<td>' + doubleMethods[row] + '</td>'); continue
                     case 4: newTable += ('<td>' + descriptionMethodsDouble[row] + '</td>'); continue
                  }
               }

               newTable += '</tr>'

            }
         }
         else
         {
            for(let row = 0; row < 4; row++)
            {
               newTable += '<tr>'
               for(let cell = 1; cell < 5; cell++)
               {
                  switch(cell){
                     case 1: switch(row) { 
                        case 0: {
                           newTable += ('<td rowspan=4 class="topBorder">' + integerNum + '</td>') 
                           continue
                        }
                        default: newTable += (""); continue
                     }
                     case 2: {
                        if(row == 0) {
                           newTable += ('<td class="topBorder">' + nameMethodsInt[row] + '</td>') 
                           continue
                        } 
                        else {
                           newTable +=('<td>' + nameMethodsInt[row] + '</td>')
                           continue
                        }
                     }
                     case 3: {
                        if(row == 0) {
                           newTable += ('<td class="topBorder">' + intMethods[row] + '</td>') 
                           continue
                        }
                        else {
                           newTable += ('<td>' + intMethods[row] + '</td>')
                           continue
                        }
                     }
                     case 4: {
                        if(row == 0) {
                           newTable += ('<td class="topBorder">' + descriptionMethodsInt[row] + '</td>') 
                           continue
                        }
                        else{
                           newTable += ('<td>' + descriptionMethodsInt[row] + '</td>')
                           continue
                        }
                     }
                  }
               }

               newTable += ('</tr>')

            }
         }
      }

      // конец таблицы
      newTable += "</table>"

      newDoc[3].innerHTML = newTable

      // применяем стили к документу
      newDoc[3].innerHTML += ('<style>' 
      + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; text-align: center; font-family: Courier, monospace; margin: 0; height: 60vh;}'
      +'.new-document-area{align-items: center;}'
      + '.table1 {display: flex; align-items: center; background: #e4ecff; color: #2972d1; padding: 7px; border-radius: 15px;}'
      + '.table1 td { min-width: 30px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700; }'
      + '.table1 th {background: #b0d9ff; min-width: 100px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700;}'
      + '.table1 .topBorder{ border-top: 2px solid #0f8bff; }</style>')

      newDoc[3].classList.add("new-document-area-active")
   }
   else
      newDoc[3].classList.remove("new-document-area-active")
}