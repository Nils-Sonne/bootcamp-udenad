// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {


	const names = ['Simon', 'Joachim', 'Kristoffer',];
    const list = document.getElementById("liste");

	names.forEach((item) => {
		let li = document.createElement("li");
		li.innerHTML = item;
		list.appendChild(li);
	  })


}); // Afslutter: DOMContentLoaded