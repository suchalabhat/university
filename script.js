// Toggle main menu
var menuBtn = document.getElementById('menuBtn');
var topHeader = document.getElementById('topHeader');

menuBtn.addEventListener('click', function(){
  console.log('clicked')
  if(topHeader.classList.contains('active')) {
    topHeader.classList.remove('active');
  } else {
    topHeader.classList.add('active');
  }
}, false);
