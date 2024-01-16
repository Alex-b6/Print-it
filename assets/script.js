const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
//on définit les constantes
let position = 0;
const numberOfSlide = slides.length;
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
createSlider(position);
createDots();
updateDot();
//création de la fonction carrousel
function createSlider(position){
	
	const element = slides[position];
	  //console.log(element);
	  const img = document.querySelector(".slider-img");
	  img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);
	  const p = document.querySelector(".slider-txt");
	  p.innerHTML= element.tagLine;

  updateDot();
}
//création de l'évenement "clic gauche"
left.addEventListener("click", function() {
	/*if (position == 0) {
        position = numberOfSlide - 1;
    }
    else {
        position--;
    }*/
	//condition ternaire
	position === 0 ? position = numberOfSlide-1 : position--;
        createSlider(position);
});
//création de l'évenement "clic droit"
right.addEventListener("click", function () {
    /*if (position == numberOfSlide - 1) {
        position = 0;
    } else {
            position++;
    }*/
	//condition ternaire
	position === numberOfSlide-1 ? position = 0 : position++;
    createSlider(position);
});
//création des dots adns le slider
function createDots(){
	const dots = document.querySelector(".dots");	
   for (let index = 0; index < slides.length; index++) {
	   // création de dot pour chaque element dans la boucle
	   const dot= document.createElement("div");
	   dot.setAttribute("class", "dot");
	   dots.appendChild(dot);
   } 
}
//MaJ des dots en fonction de l'image sélectionnée
function updateDot() {
 const listPoints = document.querySelectorAll(".dot");	
  for (let index = 0; index < listPoints.length; index++) {
  
   const dot = listPoints[index];
   if (index == position){
	   dot.classList.add('dot_selected');		
 }
 else{
   dot.classList.remove('dot_selected');	 
 }
   
   }  
}