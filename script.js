const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const open = document.getElementById('open');
const li = document.querySelectorAll('li');

// event listener
burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    close.classList.remove('hidden');
    open.classList.add('hidden');

  } else {
    menu.classList.add('hidden');
    close.classList.add('hidden');
    open.classList.remove('hidden');
  }
})