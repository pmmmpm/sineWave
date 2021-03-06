let cnv;
// let radius = 20;
// let vertices = 3;
// let strovalue = 1;
let inc;
let wave = 0;
let waveHeight = 20;
let waveFreq = 0;
let period = 2;
let offset = 2;
// let polygonNum = 20;
let size = 3;

function setup() {
	cnv = createCanvas(innerWidth, innerHeight);
	cnv.parent('p5Sketch');
	inc = PI / 60;
}

function draw() {
	background(51);
	
	let vervalue = document.getElementById('vertices').value;
	let radvalue = document.getElementById('radius').value;
	polygonNum = document.getElementById('number').value;
	waveHeight = document.getElementById('height').value;
	waveFreq = document.getElementById('frequency').value;
	size = document.getElementById('size').value;

	// strovalue = document.getElementById('strokeWeight').value;
	vertices = vervalue;
	radius = radvalue;
	// console.log(strovalue);
	for(let i = 0; i < polygonNum; i++ ){
		waveFreq = map(i,0, polygonNum, 0, TWO_PI * period);
		let y = (height/2) + (sin(wave+waveFreq) * waveHeight);
		polygon(vertices, radius * i, 5 *i, width/2, y);
	}
	
	wave += inc;

}

function polygon(vert, r, offset, posX ,posY){
	beginShape(POINTS);
	noFill();
	stroke(255,204,229);
	// strokeWeight(strovalue);
	strokeWeight(((sin(wave+waveFreq) * waveHeight)+10)*size*2);
	for(let i = 0; i < vert; i++){
		let angle = map(i, 0 , vert, 0 + offset, TWO_PI + offset);
		let x = cos(angle) * r + posX;
		let y = sin(angle) * (r) + posY;
		vertex(x, y);
	}
	endShape(CLOSE);
}

function windowResized(){
	resizeCanvas(innerWidth, innerHeight);
}