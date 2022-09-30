/--------------- responsive menu bar -------------/

let hamburgerMenu = document.querySelector('.hamburger_menu');
let dropdownItem = document.querySelector('.dropdown_item');
let line1 = document.querySelector('.line_1')
let line2 = document.querySelector('.line_2')
let line3 = document.querySelector('.line_3')

hamburgerMenu.addEventListener('click', () => {
    if (dropdownItem.style.visibility == 'visible') {
        dropdownItem.style.visibility = 'hidden'
    } else {
        dropdownItem.style.visibility = 'visible'
    }
    line1.classList.toggle('reverse_line1')
    line2.classList.toggle('hide');
    line3.classList.toggle('reverse_line3');
});


/------------------- question section --------------/

let question = document.querySelector('.question_4');
let ans = document.querySelector('.ans');
let toggle = document.querySelector('.toggle');

question.addEventListener('click', () => {
    if (toggle.src == 'https://i.ibb.co/H22CqzW/Vector.png') {
        toggle.src = './icons/cross.svg';
    } else {
        toggle.src = 'https://i.ibb.co/H22CqzW/Vector.png';
    }
    if (ans.style.display == 'none') {
        ans.style.display = 'block';
    } else {
        ans.style.display = 'none';
    }
})