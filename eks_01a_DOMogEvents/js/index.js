
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {



	let decreaseBtn = document.querySelector("#btn-count-decrease");
	let increaseBtn = document.querySelector("#btn-count-increase");
	let tekstCountElement = document.querySelector("#text-count");
	let count = 5;

	//  Function counter(){
	// 	tekstcountelement.textContent = count;
	// }

	decreaseBtn.addEventListener("click", () => {
		if (count>0){
		count--;
		tekstCountElement.innerHTML = count;
		};
	
	  });


	  increaseBtn.addEventListener("click", () => {
		
		if (count<10){
		count++;
		tekstCountElement.innerHTML = count;
		};

	  });

}); // Afslutter: DOMContentLoaded