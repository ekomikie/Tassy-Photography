
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', ()=>{
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  }else{
    menuBtn.classList.remove('open');
    menuOpen = false; 
  }
})

navbar = document.querySelector(".navbar-collapse").querySelectorAll("a");
console.log(navbar);

navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
   
  });
});


const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () =>{
  //change the theme of website
  document.body.classList.toggle('dark-mode');
  
  document.querySelectorAll('.inverted').forEach((result)=>{
    result.classList.toggle('invert');
  })
});





$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

AOS.init({
  easing: "ease-out-back",
  duration: 800,
  delay: 300,
  once: true,
  disable: "false",
});








