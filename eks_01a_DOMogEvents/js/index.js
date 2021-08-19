
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let increaseBtn = document.querySelector("#btn-count-increase");
	let decreaseBtn = document.querySelector("#btn-count-decrease");
	let textCountElement = document.querySelector("#text-count");
	let number = 5;
	let minValue = 0;
	let maxValue = 15;

	 function updateNumber(){
		textCountElement.textContent = number;
	 }

	 updateNumber();

	 function checkMinMaxValue(direction){
		 if (direction === "inc" && number < maxValue) {
			 number++;
			 updateNumber();
		 }

		 if (direction === "dec" && number > minValue) {
			number--;
			updateNumber();
		}
	}
	 
	
	increaseBtn.addEventListener("click", () => checkMinMaxValue ("inc"));
	decreaseBtn.addEventListener("click", () => checkMinMaxValue ("dec"));  // => er det samme som at skrive function 

}); // Afslutter: DOMContentLoaded
//done