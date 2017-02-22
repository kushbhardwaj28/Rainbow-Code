var font;
var vehicles = [];

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}
function setup() {
    createCanvas(700,300);
     colorMode(HSB);
    var txt = document.getElementById('text1').value;
    var pts = font.textToPoints(txt,90,200,210);
    for(var i = 0; i < pts.length; i++){
        var pt = pts[i];
        var vehicle = new Vehicle(pt.x,pt.y);
        vehicles.push(vehicle);
    }
//        stroke(255);
//        strokeWeight(7);
//        point(pt.x , pt.y);
    
}

function draw() {
    background(51);
    var text2 = document.getElementById('text1').value;
    console.log(this.txt,text2);
    if(this.txt != text2){
        vehicles = [];
        pts = font.textToPoints(text2,90,200,210);
        for(var i = 0; i < pts.length; i++){
            pt = pts[i];
            vehicle = new Vehicle(pt.x,pt.y);
            vehicles.push(vehicle);
            colorMode(HSB);
        }
        this.txt = text2;
    }
    for(var i = 0;i < vehicles.length;i++){
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}
