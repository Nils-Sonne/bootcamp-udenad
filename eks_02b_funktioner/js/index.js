// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {


	// deklererer functionen
	 function hils (navn){ 
		 
	console.log ("hej med dig!", navn); 
	console.log (`hej med dig
	
	
	${navn}`); 
	 } 


	 hils("Lars");
	 hils("Larsen");
	 hils("Morten");  // kalder functionen
  

}); // Afslutter: DOMContentLoaded