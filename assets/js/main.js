// табы
const headerItem = document.querySelectorAll('.tabs__item'),
      mainContent = document.querySelectorAll('.choose__wrapper-content');
let btnContainer = document.getElementsByClassName("tabs__list");
let btns = document.getElementsByClassName("tabs__item");


function next () {

  for (let item of headerItem) {
    item.addEventListener('click', function() {
        for (let element of mainContent) {
            element.classList.remove('active-1');
        }
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.add('active-1');
    });
}

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active-btn");
      current[0].className = current[0].className.replace(" active-btn", "");
      this.className += " active-btn";
    });
  }
}
next();

const header = document.querySelectorAll('.technologies__tabs__item'),
      main = document.querySelectorAll('.technologies__wrapper-content');
let btnActive = document.getElementsByClassName("technologies__tabs__list");
let btnsActive = document.getElementsByClassName("technologies__tabs__item");
function tabs () {

  for (let item of header) {
    item.addEventListener('click', function() {
        for (let element of main) {
            element.classList.remove('active-technologies');
        }
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.add('active-technologies');
    });
}

  for (let i = 0; i < btnsActive.length; i++) {
    btnsActive[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active-tabs");
      current[0].className = current[0].className.replace("active-tabs", "");
      this.className += " active-tabs";
    });
  }
}
tabs();
// const slider = document.querySelector('.content');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
// });

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("#burger").addEventListener("click", function() {
//         document.querySelector("header__mobile").classList.toggle("open");
//     });
// });


$(document).ready(function() {
    $('.humburger').click(function(event) {
        $('.humburger, .header__mobile').toggleClass('open');
    });
});
$('.slider').slick({
	slidesToShow:3,
	appendArrows: $('.clients__arrow'),
	responsive:[
		{
			breakpoint: 1601,
			settings: {
				variableWidth: true,
				centerMode: true,
				appendArrows: false,
				slidesToShow: 1
			}
		}
	]
}); 

$('.slider').on(`init reInit`, function(event, slick) {
	$('.counter').text(1 + ' / ' + slick.slideCount);
  });
  $('.slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
	$('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
  });
$(".js-range-slider").ionRangeSlider({
    min: 100,
    max: 1000,
    from: 550
});

const slider = document.querySelector('.content');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});




console.log(123);