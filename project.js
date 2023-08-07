let searchOpenButton = document.querySelector('.search-button');
let searchCloseButton = document.querySelector('.search-mobile .close-button');
let searchMobile = document.querySelector('.search-mobile');


// searchOpenButton.addEventListener('click', function() {
//     searchMobile.classList.add('active');
// })

// searchCloseButton.addEventListener('click',()=>{
//     searchMobile.classList.remove('active');
// })

function searchMobileToggle() {
  searchMobile.classList.toggle('active')
}
searchOpenButton.addEventListener('click', searchMobileToggle);
searchCloseButton.addEventListener('click', searchMobileToggle);

let bottomNav = document.querySelector("div.nav-links");
let topNav = document.querySelector('.top-nav')
let scrollBUtton = document.querySelector('.page-scroll-button')
window.addEventListener("scroll", function () {
  if (this.scrollY > 300) {
    bottomNav.classList.add("fixed-top");
    topNav.classList.add('fixed-top');
    scrollBUtton.classList.remove('d-none');
  } else {
    bottomNav.classList.remove("fixed-top");
    topNav.classList.remove('fixed-top');
    scrollBUtton.classList.add('d-none');
  }
});

scrollBUtton.addEventListener('click', () => {
  window.scrollTo(0, 0);
})

Fancybox.bind('[data-fancybox]', {

});



if (document.querySelector('.gallery-buttons')) {
  let galleryButtons = document.querySelectorAll('.gallery-buttons button');
  let galleryContainer = document.querySelectorAll('.gallery-container');

  galleryButtons[0].classList.add('active');
  galleryContainer[0].classList.remove('d-none');

  galleryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let category = button.getAttribute('data-category');
      // buttona active class elave etmek
      for (let i = 0; i < galleryButtons.length; i++) {
        galleryButtons[i].classList.remove('active');
      }
      button.classList.add('active');

      // aktiv konteyneri acmaq
      for (let i = 0; i < galleryContainer.length; i++) {
        galleryContainer[i].classList.add('d-none');
      }
      let activeContainer = Array.from(galleryContainer).find((container) => container.getAttribute('data-category') === category);
      activeContainer.classList.remove('d-none');
    })
  })
}




if (document.querySelector(".food-category")){
    
  let categoryButtons = document.querySelectorAll('.food-category button');
  let foods = document.querySelectorAll('.product-col');
  
  categoryButtons[0].classList.add('active');
  
  categoryButtons.forEach((button) => {
      button.addEventListener('click', function(){
          let categoryID = button.getAttribute('data-id');
          
          for (let i = 0; i < categoryButtons.length; i++){
              categoryButtons[i].classList.remove('active');
          }
          button.classList.add('active');
  
  
          if (categoryID === '0'){
              for (let i = 0; i < foods.length; i++){
                  foods[i].classList.remove('d-none');
              }
          }
          else {
              let filteredFoods = Array.from(foods).filter(
                (foods) => foods.getAttribute('data-category-id') === categoryID
                );
              for (let i = 0; i < foods.length; i++){
                  foods[i].classList.add('d-none');
              }
              for (let i = 0; i < filteredFoods.length; i++){
                  filteredFoods[i].classList.remove('d-none');
              }
          }
      })
  })
  }


if (document.querySelector('.menu-container')) {
  let menuButtons = document.querySelectorAll('.menu-buttons button');
  let menuContainer = document.querySelectorAll('.menu-container');

  menuButtons[0].classList.add('active');
  menuContainer[0].classList.remove('d-none');

  menuButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let category = button.getAttribute('data-category');
      // buttona active class elave etmek
      for (let i = 0; i < menuButtons.length; i++) {
        menuButtons[i].classList.remove('active');
      }
      button.classList.add('active');

      // aktiv konteyneri acmaq
      for (let i = 0; i < menuContainer.length; i++) {
        menuContainer[i].classList.add('d-none');
      }
      let activeContainer = Array.from(menuContainer).find((container) => container.getAttribute('data-category') === category);
      activeContainer.classList.remove('d-none');
    });
  });
}
