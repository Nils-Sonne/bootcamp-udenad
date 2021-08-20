// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

document.addEventListener("DOMContentLoaded", () => {

	const names = ['Simon', 'Joachim', 'Kristoffer',];
    const list = document.querySelector("#liste");
	const namesNew = ['Nikolaj', 'Tobias', 'Jonathan',];

// function myFunction (array) {
// for (let i = 0; i < array.length; i++) {
// let element = document.createElement("li");
// list.append(element);
// element.append(array[i]);


// }
// 	}
//  myFunction(names);

function myFunction(array) {
array.forEach((navn) => {
	list.innerHTML += `<li> ${navn} </li>`;
});
}

myFunction(names);
myFunction(namesNew);

	  
});
	 


