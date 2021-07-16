//Items
const sneaker = document.querySelector(".sneaker img");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Animação sobre o evento
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 0;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 0;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


container.addEventListener("mouseenter", (e) => {
card.style.transition = "none";

//Rotação do sneaker
sneaker.style.transform = "translateZ(450px) rotateZ(-25deg)";
 });


 //retorno da animação
container.addEventListener("mouseleave", (e) => {
sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";

});