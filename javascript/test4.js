
let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let labelIndex = 0;

for(let i = 0; i < labels.length * 2; i++) {
	console.log(labels[labelIndex++ % labels.length]);
}