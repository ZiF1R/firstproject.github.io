//    4 lw
const newDocBtn = document.querySelectorAll('.new-doc-btn')
const newDoc = document.querySelectorAll('.new-document-area')

function user_object_group() {
    function Group(group_number, speciality, students_number){
       this.group_number = group_number
       this.speciality = speciality
       this.students_number = students_number
 
       this.sub_student = function sub_student(count) { 
          this.students_number -= count
          if(count == 1)
             alert("Из группы " + this.group_number + " был исключен " 
                  + count + " студент.")
          else
             alert("Из группы " + this.group_number + " было исключено " 
                  + count + " студентов.")
       }
       
       this.add_student = function add_student(count) { 
          this.students_number += count
          if(count == 1)
             alert("В группу " + this.group_number + " был добавлен " 
                  + count + " студент.")
          else
             alert("В группу " + this.group_number + " было добавлено " 
                  + count + " студентов.")
       }
    }
 
    let first_group = new Group(1, "Web Design", 30)
    let second_group = new Group(2, "Software", 27)
    let third_group = new Group(3, "Game Dev", 28)
 
    let first_start = first_group.students_number
    let second_start = second_group.students_number
    let third_start = third_group.students_number
 
    alert(first_group.speciality + ": " + first_group.group_number + "-я группа, " 
         + first_group.students_number + " студентов.\n" 
    + second_group.speciality + ": " + second_group.group_number + "-я группа, " 
         + second_group.students_number + " студентов.\n"
    + third_group.speciality + ": " + third_group.group_number + "-я группа, " 
         + third_group.students_number + " студентов.")
 
    let substract = prompt("Сколько студентов вы хотите исключить из группы " 
                           + first_group.group_number + "?", 0)
    substract = Number.parseInt(substract)
    first_group.sub_student(substract)
 
    let add = prompt("Сколько студентов вы хотите добавить в группу " 
                     + second_group.group_number + "?", 0)
    add = Number.parseInt(add)
    second_group.add_student(add)
 
    add = prompt("Сколько студентов вы хотите добавить в группу " 
               + third_group.group_number + "?", 0)
    add = Number.parseInt(add)
    third_group.add_student(add)
    
    substract = prompt("Сколько студентов вы хотите исключить из группы " 
                        + third_group.group_number + "?", 0)
    substract = Number.parseInt(substract)
    third_group.sub_student(substract)
 
    alert("В " + first_group.group_number + "-й группе было " + first_start 
         + " студентов, стало " + first_group.students_number + '\n'
    + "В " + second_group.group_number + "-й группе было " + second_start 
         + " студентов, стало " + second_group.students_number + '\n'
    + "В " + third_group.group_number + "-й группе было " + third_start 
         + " студентов, стало " + third_group.students_number + '\n')
}

// доделать
function user_object_example() {
    function Book(b_name, b_pages_number){
       this.b_name = b_name
       this.b_pages_number = b_pages_number
       
       let chapters_number = 0
       let pages_copy = this.b_pages_number
       while(pages_copy > 0){
          pages_copy -= 100
          chapters_number++
       }
 
       this.pages_left = (pages = 0) => {
          if(pages <= this.b_pages_number){
             if((pages / 100).toPrecision(1) == 1){
                alert("Вы полностью прочли " + (pages / 100).toPrecision(1) + " главy."
                + "\nВам осталось прочитать " + (this.b_pages_number - pages) + " старниц.")
             }
             else if((pages / 100).toPrecision(1) > 1 && (pages / 100).toPrecision(1) < 5){
                alert("Вы полностью прочли " + (pages / 100).toPrecision(1) + " главы."
                + "\nВам осталось прочитать " + (this.b_pages_number - pages) + " старниц.")
             }
             else{
                alert("Вы полностью прочли " + (pages / 100 < 1 ? 0 : (pages / 100).toPrecision(1)) + " глав."
                + "\nВам осталось прочитать " + (this.b_pages_number - pages) + " старниц.")
             }
          }
          else
             alert("Количество прочитанных страниц не может превышать " + this.b_pages_number)
       }
    }
 
    let book_count = prompt("Сколько книг вы сейчас читаете?", 0) || 1
    book_count = Number.parseInt(book_count)
 
    let books_array = new Array()
 
    for(let i = 1; i < book_count + 1; i++){
       let book_name = prompt("Введите название " + i + "-й книги.", 'Книга' + i) || 'Книга' + i
 
       let pages_number = prompt("Введите количество страниц для '" + book_name + "'", 0) || 0
       pages_number = Number.parseInt(pages_number)
 
       let book = new Book(book_name, pages_number)
       books_array[i - 1] = book
    }
 
    for(let i = 0; i < books_array.length; i++){
       let pages_read = prompt("Сколько страниц вы прочли в книге '" + books_array[i].b_name + "' ?", 0) || 0
       pages_read = Number.parseInt(pages_read)
 
       books_array[i].pages_left(pages_read)
    }
}

// новая версия 2-го задания
newDocBtn[0].onclick = () => {
   if(!(newDoc[0].classList.contains("new-document-area-active"))){
      function Student(m_name, m_secondName, m_physicsMark, 
         m_mathMark, m_compScienceMark){
         this.m_name = m_name
         this.m_secondName = m_secondName
         this.m_physicsMark = m_physicsMark
         this.m_mathMark = m_mathMark
         this.m_compScienceMark = m_compScienceMark
   
         this.printName = (name, secondName) => {
            this.m_name = name
            this.m_secondName = secondName
            alert("Фамилия: " + this.m_secondName
                  + "\nИмя: " + this.m_name)
         }
   
         this.printGroup = group => {
            this.m_group = group
            alert("Группа: " + this.m_group)
         }
   
         this.averageMark = (physicsMark, mathMark, compScienceMark) => {
            this.m_physicsMark = physicsMark
            this.m_mathMark = mathMark
            this.m_compScienceMark = compScienceMark
   
            let average = ((this.m_physicsMark + this.m_mathMark + this.m_compScienceMark) / 3).toFixed(2)
   
            alert("Средний балл: " + average)
         }
   
         this.printAllInfo = (name, secondName, physicsMark, mathMark, compScienceMark, group) => {
            this.m_name = name
            this.m_secondName = secondName
            this.m_physicsMark = physicsMark
            this.m_mathMark = mathMark
            this.m_compScienceMark = compScienceMark
            this.m_group = group
   
            let average = ((this.m_physicsMark + this.m_mathMark + this.m_compScienceMark) / 3).toFixed(2)
   
            alert("Фамилия: " + this.m_secondName
            + "\nИмя: " + this.m_name
            + "\nГруппа: " + this.m_group
            + "\nСредний балл: " + average)
         }
      }
   
      let student1  = new Student("Александр", "Добриян", 7, 4, 9)
   
      let student2  = new Student("Чеслав", "Линевич", 10, 10, 10)
   
      Student.prototype.m_group = this.m_group

      student1.m_group = 10
      student2.m_group = 10

      student1.printName(student1.m_name, student1.m_secondName)
      student1.printGroup(student1.m_group)
      student1.averageMark(student1.m_physicsMark, student1.m_mathMark, student1.m_compScienceMark)
   
      student2.printName(student2.m_name, student2.m_secondName)
      student2.printGroup(student2.m_group)
      student2.averageMark(student2.m_physicsMark, student2.m_mathMark, student2.m_compScienceMark)
   
      student1.printAllInfo(student1.m_name, student1.m_secondName, student1.m_physicsMark, 
         student1.m_mathMark, student1.m_compScienceMark, student1.m_group)
      student2.printAllInfo(student2.m_name, student2.m_secondName, student2.m_physicsMark, 
         student2.m_mathMark, student2.m_compScienceMark, student2.m_group)

      newDoc[0].innerHTML = ('Фамилия: ' + student1.m_secondName
                  + '<br>Имя: ' + student1.m_name
                  + '<br>Группа: ' + student1.m_group
                  + '<br>Средний балл: ' + ((student1.m_physicsMark + student1.m_mathMark + student1.m_compScienceMark) / 3)

                  + '<p></p>'

                  + '<br>Фамилия: ' + student2.m_secondName
                  + '<br>Имя: ' + student2.m_name
                  + '<br>Группа: ' + student2.m_group
                  + '<br>Средний балл: ' + ((student2.m_physicsMark + student2.m_mathMark + student2.m_compScienceMark) / 3).toFixed(2))

      // применяем стили к документу
      newDoc[0].innerHTML += ('<style>' 
      + '.new-document-area-active {background: #f8f8f8; color: #333; font-size: 16px; font-family: Courier, monospace; margin: 0; height: 30vh;}'
      + '.new-document-area { align-items: flex-start; }</style>')

      newDoc[0].classList.add("new-document-area-active")
   }
   else
      newDoc[0].classList.remove("new-document-area-active")
}


function user_object_methods() {
   function Student(m_name, m_secondName, m_physicsMark, 
      m_mathMark, m_compScienceMark){
      this.m_name = m_name
      this.m_secondName = m_secondName
      this.m_physicsMark = m_physicsMark
      this.m_mathMark = m_mathMark
      this.m_compScienceMark = m_compScienceMark

      this.printName = (name, secondName) => {
         this.m_name = name
         this.m_secondName = secondName
         alert("Фамилия: " + this.m_secondName
               + "\nИмя: " + this.m_name)
      }

      this.printGroup = group => {
         this.m_group = group
         alert("Группа: " + this.m_group)
      }

      this.averageMark = (physicsMark, mathMark, compScienceMark) => {
         this.m_physicsMark = physicsMark
         this.m_mathMark = mathMark
         this.m_compScienceMark = compScienceMark

         let average = ((this.m_physicsMark + this.m_mathMark + this.m_compScienceMark) / 3).toFixed(2)

         alert("Средний балл: " + average)
      }

      this.printAllInfo = (name, secondName, physicsMark, mathMark, compScienceMark, group) => {
         this.m_name = name
         this.m_secondName = secondName
         this.m_physicsMark = physicsMark
         this.m_mathMark = mathMark
         this.m_compScienceMark = compScienceMark
         this.m_group = group

         let average = ((this.m_physicsMark + this.m_mathMark + this.m_compScienceMark) / 3).toFixed(2)

         alert("Фамилия: " + this.m_secondName
         + "\nИмя: " + this.m_name
         + "\nГруппа: " + this.m_group
         + "\nСредний балл: " + average)
      }
   }
   let student1  = new Student("Александр", "Добриян", 7, 4, 9)

   Student.prototype.m_group = this.m_group
   student1.m_group = 10

   function Group(group_number, speciality, students_number){
      this.group_number = group_number
      this.speciality = speciality
      this.students_number = students_number

      this.sub_student = function sub_student(count) { 
         this.students_number -= count
         if(count == 1)
            alert("Из группы " + this.group_number + " был исключен " 
                 + count + " студент.")
         else
            alert("Из группы " + this.group_number + " было исключено " 
                 + count + " студентов.")
      }
      
      this.add_student = function add_student(count) { 
         this.students_number += count
         if(count == 1)
            alert("В группу " + this.group_number + " был добавлен " 
                 + count + " студент.")
         else
            alert("В группу " + this.group_number + " было добавлено " 
                 + count + " студентов.")
      }
   } 
   let first_group = new Group(1, "Web Design", 30)

   let mathObj = new Array()
   mathObj[0] = 6*Math.pow(Math.PI,2) + 3*Math.pow(Math.E,8)
   mathObj[1] = 2*Math.cos(4) + Math.cos(12) + 8*Math.pow(Math.E,3)
   mathObj[2] = 3*Math.sin(9) + Math.log(5) + Math.sqrt(3)
   mathObj[3] = 2*Math.tan(5) + 6*Math.PI + Math.sqrt(12)

   let arrayObj = new Array("pow", " pop", " push", " shift", " round", " floor", " slice", " sort")

   let strObj = new String ("Добриян Александр Витальевич")

   //**********************************


   // оператор delete
   alert("Исходный массив:\n" + arrayObj)

   delete arrayObj[2]
   alert("Массив, после удаления 3-го элемента:\n" + arrayObj)
   
   // оператор in
   2 in arrayObj ? alert("В массиве есть 3-й элемент.") : alert("В массиве нет 3-го элемента.")

   'm_name' in student1 ? alert("В объекте 'Student' есть свойство 'm_name'.") 
         : alert("В объекте 'Student' нет свойства 'm_name'.")

   'm_name' in first_group ? alert("В объекте 'Group' есть свойство 'm_name'.") 
         : alert("В объекте 'Group' нет свойства 'm_name'.")

   // оператор instanceof
   let instanceText;
   strObj instanceof String ? instanceText = "'strObj' является объектом String.\n" 
         : instanceText = "'strObj' не является объектом String.\n"

   arrayObj instanceof Array ? instanceText += "'arrayObj' является объектом Array.\n" 
         : instanceText += "'arrayObj' не является объектом Array.\n"

   student1 instanceof Student ? instanceText += "'student1' является объектом Student.\n" 
         : instanceText += "'student1' не является объектом Student.\n"

   alert(instanceText);

   // оператор typeof
   const returnFive = () => 5

   alert("Тип обьекта, который возвращает число 5: " + typeof returnFive
      + "\nТип обьекта 'strObj': " + typeof strObj
      + "\nТип обьекта 'arrayObj': " + typeof arrayObj
      + "\nТип обьекта 'student1': " + typeof student1
      + "\nТип обьекта 'first_group': " + typeof first_group
      + "\nТип обьекта 'Group': " + typeof Group
      + "\nТип обьекта 'Student': " + typeof Student)

   alert("Объект Student:"
      + "\nТип свойства 'm_name': " + typeof student1.m_name
      + "\nТип свойства 'm_secondName': " + typeof student1.m_secondName
      + "\nТип свойства 'm_physicsMark': " + typeof student1.m_physicsMark
      + "\nТип свойства 'm_mathMark': " + typeof student1.m_mathMark
      + "\nТип свойства 'm_compScienceMark': " + typeof student1.m_compScienceMark
      + "\nТип свойства 'm_group': " + typeof student1.m_group)
   
   alert("Объект Group:"
      + "\nТип свойства 'group_number': " + typeof first_group.group_number
      + "\nТип свойства 'speciality': " + typeof first_group.speciality
      + "\nТип свойства 'students_number': " + typeof first_group.students_number)
}
 