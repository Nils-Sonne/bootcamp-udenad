
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {



	let decreaseBtn = document.querySelector("#btn-count-decrease");
	let increaseBtn = document.querySelector("#btn-count-increase");
	let textCountElement = document.querySelector("#text-count");
	let number = 5;
	let min = 0;
	let max = 15;





	 function updateNumber(){
		textCountElement.textContent = number;
	 }

	 updateNumber();

	decreaseBtn.addEventListener("click", () => {
		if (number> min){
		number--;
		updateNumber ();
		}
	
	  });


	  increaseBtn.addEventListener("click", () => {
		
		if (number< max){
		number++;
		updateNumber ();
		}

	  });

}); // Afslutter: DOMContentLoaded
//done