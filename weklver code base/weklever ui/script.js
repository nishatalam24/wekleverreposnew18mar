// const burger_icon = document.querySelector('[burger_icon]');
// const navbarlistitems = document.querySelector('[navbarlistitems]');
// const list_items_services = document.querySelector('[list_items_services]');
// const list_items_expertise = document.querySelector('[list_items_expertise]');





// const services_container = document.querySelector('[services_container]');
// const expertise_container = document.querySelector('[expertise_container]');



// services_container.addEventListener('mouseover', () => {
//       list_items_services.style.display = 'block';
// });

// list_items_services.addEventListener('mouseover', () => {
//   list_items_services.style.display = 'block';
// });
// list_items_services.addEventListener('mouseout', () => {
//   list_items_services.style.display = 'none';
// });

// services_container.addEventListener('mouseout', () => {
//       list_items_services.style.display = 'none';
//       // console.log("hello")
// });



// expertise_container.addEventListener('mouseover', () => {
//       list_items_expertise.style.display = 'block';
// });

// list_items_expertise.addEventListener('mouseover', () => {
//       list_items_expertise.style.display = 'block'; 
// });

// list_items_expertise.addEventListener('mouseout', () => {
//       list_items_expertise.style.display = 'none';
// });

// expertise_container.addEventListener('mouseout', () => {
//       list_items_expertise.style.display = 'none';
// });



// // expertise_container.addEventListener('mouseenter', () => {
// //     // container.classList.add('hover');
// // });

// // expertise_container.addEventListener('mouseleave', () => {
// //     // container.classList.remove('hover');
// // });



// let burger_active=false;
// burger_icon.addEventListener('click', function() {

// if(!burger_active){
//     burger_icon.classList.add('burger_icon_active');
//     burger_active=true;
//     navbarlistitems.classList.add('navbarlist_item_active');
// }

// else{
//     burger_icon.classList.remove('burger_icon_active');
//     burger_active=false;
//     navbarlistitems.classList.remove('navbarlist_item_active');
// }
//     // myElement.classList.add('new-class')
//   });

// //   navbarlistitems.addEventListener('click', function() {

 
// //   })

// // send email function




function sendEmail() {
  // Replace 'recipient@example.com' with the actual email address
  var email = 'marcblake@weklever.com';
  var subject = 'Subject of the email';
  var body = 'Body of the email';

  // Construct the mailto link
  var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Open the user's default email client
  window.location.href = mailtoLink;
}

  // search-box open close js code
let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// searchBox.addEventListener("click", ()=>{
//   navbar.classList.toggle("showInput");
//   if(navbar.classList.contains("showInput")){
//     searchBox.classList.replace("bx-search" ,"bx-x");
//   }else {
//     searchBox.classList.replace("bx-x" ,"bx-search");
//   }
// });

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
navLinks.classList.toggle("show1");
}
// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function() {
//  navLinks.classList.toggle("show2");
// }
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
navLinks.classList.toggle("show3");
}



// Footer

// Offices
let ourOffices = document.getElementById('our-offices')
let offices = document.getElementById("collapse-footer-offices")
let closeOffice = document.getElementById("office-right") 


let ourOffices_on_off=false;

ourOffices.addEventListener("click", () => {

if(!ourOffices_on_off){
  offices.style.display = "block"
  // offices.style.position = "relative"
  closeOffice.style.transform = "rotate(90deg)"
  ourOffices_on_off=true;
}


else{
  offices.style.display = "none"
  // offices.style.position = "relative"
  closeOffice.style.transform = "rotate(360deg)"
  ourOffices_on_off=false;
}

})

// closeOffice.addEventListener("click", () => {
//   offices.style.display = "none"
//   // offices.style.position = "relative"
//   closeOffice.style.transform = "rotate(360deg)"
// })

// Companies
let company = document.getElementById("our-company")
let companies = document.getElementById("collapse-footer-navigation-1")
let closeCompany = document.getElementById("company-right")


let company_on_off=true;


company.addEventListener("click", () => {

if (!company_on_off) {
companies.style.display = "block"
// companies.style.position = "relative"
closeCompany.style.transform = "rotate(90deg)"
company_on_off=true;
}

else{
companies.style.display = "none"
// companies.style.position = "relative"
closeCompany.style.transform = "rotate(360deg)"
company_on_off=false;
}



})

// closeCompany.addEventListener("click", () => {
//   companies.style.display = "none"
//   closeCompany.style.transform = "rotate(360deg)"
// })

// Services
let service = document.getElementById("our-service")
let services = document.getElementById("collapse-footer-navigation-2")
let closeService = document.getElementById("service-right")

let sevice_on_off = false

service.addEventListener("click", () => {
if (!sevice_on_off) {
  services.style.display = "block"
  closeService.style.transform = "rotate(90deg)"
  sevice_on_off = true
}

else{
services.style.display = "none"
closeService.style.transform = "rotate(360deg)"
sevice_on_off = false
}

})

// closeService.addEventListener("click", () => {
//   services.style.display = "none"
//   closeService.style.transform = "rotate(360deg)"
// })

// Expertise
let expertise = document.getElementById("our-expertise")
let expertises = document.getElementById("collapse-footer-navigation-3")
let closeExpertise = document.getElementById("expertise-right")

let expertise_on_off = false

expertise.addEventListener("click", () => {


if(!expertise_on_off){
  expertises.style.display = "block"
  expertises.style.position = "relative"
  closeExpertise.style.transform = "rotate(90deg)"
  expertise_on_off = true
}

else{
  expertises.style.display = "none"
  expertises.style.position = "relative"
  closeExpertise.style.transform = "rotate(360deg)"
  expertise_on_off = false
}

})

// closeExpertise.addEventListener("click", () => {
//   expertises.style.display = "none"
//   closeExpertise.style.transform = "rotate(360deg)"
// })

function redirectToAboutUs() {
  // Redirect to the aboutus.html page
  window.location.href = 'aboutus.html';
}





