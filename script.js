// Fonctionnalité 1 et 1-bis :

let footer = document.querySelector('footer');

clickNb = 0;

footer.addEventListener('click', function(event){ 
  clickNb++
  console.log(`Clique n°${clickNb}`);
});

// Fonctionnalité 2 :

let navbarCollapse = document.querySelector('#navbarHeader');
let menuBurger = document.querySelector('button.navbar-toggler');

collapseMenu = function() {
  navbarCollapse.classList.toggle("collapse");
}

menuBurger.addEventListener('click', collapseMenu);

// Fonctionnalité 3 :

let btnFirstCard = document.querySelector('.card .btn-outline-secondary');
let textFirstCard = document.querySelector('.card-text');

btnFirstCard.addEventListener('click', function() {
  textFirstCard.style.color = 'red';
})

// Fonctionnalité 4 :

let btnSecondCard = document.querySelectorAll('.card')[1].querySelector('.btn-outline-secondary');
let textSecondCard = document.querySelectorAll('.card')[1].querySelector('.card-text');

btnSecondCard.addEventListener('click', function() {
  if (textSecondCard.style.color === 'green') {
    textSecondCard.style.color = 'black';
  } else {
    textSecondCard.style.color = 'green';
  }
})

// Fonctionnalité 5 :

let navbar = document.querySelector('header');
let linkBootstrap = document.querySelector('link');

navbar.addEventListener("dblclick", function() {
  if (linkBootstrap.href === 'http://127.0.0.1:5500/exo_events.html') {
    linkBootstrap.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  } else {
    linkBootstrap.href = '';
  }
})

// Fonctionnalité 6 :

let btnsView = document.getElementsByClassName('btn-success');
let cardTexts = document.querySelectorAll('.card-text')
let cardImgs = document.querySelectorAll('.card-img-top')

for(let i = 0; i < btnsView.length; i++) {
  let btn = btnsView[i];
  
  btn.addEventListener('mouseover', function() {
    if (cardTexts[i].innerHTML != '') {
      cardTexts[i].innerHTML = '';
      cardImgs[i].style.width = '20%';
      cardImgs[i].style.margin = '0 auto';
    } else {
      cardTexts[i].innerHTML = 'lol';
      cardImgs[i].style.width = '100%';
      cardImgs[i].style.margin = '0 auto';
    }
  });

}

// Fonctionnalité 7 :
