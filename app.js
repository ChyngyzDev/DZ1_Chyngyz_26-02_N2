let child = document.querySelector('#child');
let parent = document.querySelector('#parent');
let btn = document.querySelector('#right');

function moveRight() {
  let currentPosition = parseInt(window.getComputedStyle(child).left);
  if (currentPosition >= parent.offsetWidth - child.offsetWidth) {
    return;
  }
  child.style.left = currentPosition + 50 + 'px';
  
}

btn.addEventListener('click', moveRight);
