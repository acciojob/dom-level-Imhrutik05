const element = document.getElementById('level');

let count = 1;
let parent = none;

while (element != <html>){
	let parent1 = element.parentElement;
	count++;
	element = parent1;
}

alert(`The level of the element is: ${count}`)