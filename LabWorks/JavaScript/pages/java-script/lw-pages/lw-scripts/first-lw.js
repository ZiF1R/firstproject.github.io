//    1 lw
const newDocBtn = document.querySelectorAll('.new-doc-btn')
const newDoc = document.querySelectorAll('.new-document-area')


function first_task() {
   alert("Вас приветствует учебный центр")

   alert("Добро пожаловать на наши курсы, " + (prompt('Введите имя', 'Имя') || 'Имя'))

   let answer = confirm("Хотите стать Web-дизайнером?")
   if(answer)
      alert("Учите стили CSS и JavaScript!")
   else
      alert("Упускаете время!")
}

// 2 task

newDocBtn[0].onclick = () => {
      newDoc[0].classList.toggle("new-document-area-active")

      newDoc[0].innerHTML = "1) 10 + 5 = " + (10 + 5)
         + "<br>2) '10' + '5' = " + ("10" + "5")
         + "<br>3) 22 + '5' = " + (22 + "5")
         + "<br>4) '22' + 5 = " + ("22" + 5)
         + "<br>Вывод: результатом сложения строки и числа всегда будет строка."
         + '<style>.new-document-area{align-items: flex-start;}</style>'
}

// 3 task

newDocBtn[1].onclick = () => {
   if(!(newDoc[1].classList.contains("new-document-area-active"))){
      let x = 1, y = 12
      let firstExpr = ((35*y) - (25*x)) / (5 + 232)
      let secondExpr = ((8*y / x) + (5*x / y)-43)*6
      
      let result = Math.round(secondExpr)%Math.round(firstExpr)
      
      alert("Результат первого выражения равен " + Math.round(firstExpr))
      alert("Результат второго выражения равен " + Math.round(secondExpr))
      alert("Остаток от деления второго выражения на первое равен " + result)

      newDoc[1].classList.add("new-document-area-active")

      newDoc[1].innerHTML = "Результат первого выражения " + Math.round(firstExpr)
     + "<br>Результат второго выражения " + Math.round(secondExpr)
     + "<br>Остаток от деления второго выражения на первое " + result
     + '<style>.new-document-area{align-items: flex-start;}</style>'
   }
   else{
      newDoc[1].classList.remove("new-document-area-active")
   }
}


function fourth_task() {
   let x = prompt('Введите число: ', '0')

   if(x) {
         if(((x < 20) || (x > 40)) && ((x % 5) == 0) && (x != 15))
            alert("Правильное значение")
         else
            alert("Не правильное значение")
   }
   else
      alert("В поле необходимо что-то ввести!")

   let y = prompt('Введите число, квадрат которого больше 144: ', '0')

   if(y) {
      if((y * y) > 144)
         alert("Правильно " + (y * y) + " > 144")
      else
         alert("Не правильно " + (y * y) + " <= 144")
   }
   else
      alert("В поле необходимо что-то ввести!")

}

function fifth_task() {
   let x = prompt('Введите первое число: ', '0')
   let y = prompt('Введите второе число: ', '0')

   // чтобы все правильно работало
   // преобразуем полученные строки в числа
   x = Number.parseInt(x)
   y = Number.parseInt(y)

   if(x > y)
      alert(x + " > " + y)
   else if(x < y)
      alert(x + " < " + y)
   else
      alert(x + " = " + y)

   let mark = prompt('Что вы получили за экзамен по ОИТ?', '0')
   mark = Number.parseInt(mark);

   ((mark < 1) || (mark > 10)) ? alert("Введите корректную оценку!") : ( (mark > 3) ? alert("Поздравляю, у Вас зачет!") : alert("К сожалению, у Вас незачёт!"))
}

function sixth_task() {
   let answer = +(prompt('Какой сегодня день:', '1'))

   let currentDay = answer % 7

   switch(currentDay){
      case 1: alert("Понедельник"); break
      case 2: alert("Вторник"); break
      case 3: alert("Среда"); break
      case 4: alert("Четверг"); break
      case 5: alert("Пятница"); break
      case 6: alert("Суббота"); break
      case 0: alert("Воскресенье"); break
      default: alert("Некорректный день!"); break
   }
}

function seventh_task() {
   alert("Эта программа покажет работу конструкции try...catch!")

   const x = 12
   alert("Определим константную переменную 'x' = " + x)

   let y = (x*x + 2) / (12 - 1) * 5 * x
   alert("Рассчитаем значение данного выражения:"
   + "\n(x^2 + 2) / (12 - 1) * 5 * x = " + Math.round(y))
   
   alert("Попробуем присвоить 'x' другое значение и пересчитать выражение.")
   try {
      x = 131 // ошибка

      // последующие строчки в этом блоке не сработают
      // потому что пытаясь переопределить константу
      // мы получим ошибку и программа дальше не будет выполняться 
      alert("x = " + x)

      y = (x*x + 2) / (12 - 1)*5*x
      alert("(x^2 + 2) / (12 - 1)*5*x = " + Math.round(y))
   } 
   catch (error) {
      alert("Попытались переопределить константу, тем самым вызвав ошибку.\n"
      + "Текст ошибки -> " + error)
   }
   finally{
      alert("Вывод: каждый раз, когда мы будем переопределять константу, программа будет выдавать ошибку и прекращать свое выполнение, будьте осторожнее!")
   }
}