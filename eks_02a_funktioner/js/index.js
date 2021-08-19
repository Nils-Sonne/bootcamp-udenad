// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	function hils(){  // deklererer functoion
		console.log("hej med dig!");
	}
	console.log(hils()); //
	hils();

}); // Afslutter: DOMContentLoaded