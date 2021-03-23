/* header-scroll animation 

// let lastScrollTop = 0;

// $(window).scroll(function(event){
//     let st = $(this).scrollTop();
// 	if (st > lastScrollTop){
// 		// down-scroll
// 		$("header").css("transform", "translateY(-100%)");
//         // $(".submenu").removeClass("menu-click");
//     }
//     else {
// 		// up-scroll
// 		$("header").css("transform", "translateY(0%)");
// 	}
// 	lastScrollTop = st;
// });*/


//! добавляем атрибут "title" ко всем дочерним элементам
//! класса '.sub-menu', со значением "Перейти к Лабораторной"

const subMenu = document.querySelectorAll('.sub-menu');

for(let list = 0; list < subMenu.length; list++){
    for(let listItem = 0; listItem < subMenu[list].childElementCount; listItem++){
        subMenu[list].children[listItem].setAttribute("title", "Перейти к Лабораторной");
    }
}

const menu = document.querySelector('nav')

function openMenu() {
    menu.classList.toggle("nav-opened")
}

function closeMenu() {
    menu.classList.toggle("nav-opened")
}

// console.log(body.children)

//! плавная прокрутка до якоря

// $(function(){
//     $(".toTop").on("click", function(event){
//         event.preventDefault();

//         let id = $(this).attr('href'), 
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 500);
//     });
// });


//! добавляем номера строк кода

// const codeLines = document.querySelectorAll('.code-content')
// const codeLinesCount = document.querySelectorAll('.code-lines')

// for(let i = 0; i < codeLines.length; i++){
//     linesCount = codeLines[i].childElementCount

//     for(let j = 0; j < linesCount; j++){
//         let span = document.createElement("span")
//         span.innerHTML = j + 1
//         codeLinesCount[i].appendChild(span)
//     }
// }

