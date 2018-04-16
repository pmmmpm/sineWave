let cnv;
// let radius = 20;
// let vertices = 3;

function setup() {
	cnv = createCanvas(innerWidth, innerHeight);
	cnv.parent('p5Sketch');
}

function draw() {
	background(51);
	
	let vervalue = document.getElementById('vertices').value;
	let radvalue = document.getElementById('radius').value;
	vertices = vervalue;
	radius = radvalue;
	for(let i = 0; i < 10; i++ ){
		polygon(vertices, radius * i, width/2, height/2);
	}
	

}

function polygon(vert, r, posX ,posY){
	beginShape();
	noFill();
	stroke(153,153,0);
	for(let i = 0; i < vert; i++){
		let angle = map(i, 0 , vert, 0, TWO_PI);
		let x = cos(angle) * r + posX;
		let y = sin(angle) * (r / 2) + posY;
		vertex(x, y);
	}
	endShape(CLOSE);
}

function windowResized(){
	resizeCanvas(innerWidth, innerHeight);
}