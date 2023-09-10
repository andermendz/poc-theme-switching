let body = document.querySelector('body')
let switch_button = document.querySelector('.switch-button');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode')
    
   
} else if  (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    body.classList.add('light-mode')
}

switch_button.onclick = function() {
   if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode')
    body.classList.add('dark-mode')
   } else if (body.classList.contains('dark-mode')){
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
   }
};