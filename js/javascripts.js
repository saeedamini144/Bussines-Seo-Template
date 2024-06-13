AOS.init();

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    navText: ['', ''],
    margin:20,
    responsiveClass:true,
    autoHeight: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
  })
});

// burger menu tab
// const burgerMenu = document.getElementById("burger-menu");
// function change() {
//   document.getElementById("span1").classList.toggle("span1");
//   document.getElementById("span2").classList.toggle("span2");
// }
// burgerMenu.addEventListener("click", change);
///Js-tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

///Js-tab-price-button
function price(evt, plane) {
  var j, tab_price, tablink_price;
  tab_price = document.getElementsByClassName("tab_price");
  for (j = 0; j < tab_price.length; j++) {
    tab_price[j].style.display = "none";
  }
  tablink_price = document.getElementsByClassName("tablink_price");
  for (j = 0; j < tablink_price.length; j++) {
    tablink_price[j].className = tablink_price[j].className.replace(" active", "");
  }
  document.getElementById(plane).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("default").click();

$(document).ready(function() {
  $(".mobile_menu").simpleMobileMenu({
      // onMenuLoad: function(menu) {
      //     console.log(menu)
      //     console.log("menu loaded")
      // },
      // onMenuToggle: function(menu, opened) {
      //     console.log(opened)
      // },
      "menuStyle": "slide"
  });
})
