const element = document.getElementById('level');

let count = 1;

while (element !== document.documentElement){
	let parent1 = element.parentElement;
	element = parent1;
	count++;
}

alert(`The level of the element is: ${count}`)