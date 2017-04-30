console.log(3);
var dir=true;
var angle=0;
var i=0;
var anCon=0;
var erase=false;
function getCenters(c,str){
	var cenNum=document.getElementById("cenNum").value;
	angle=(Math.PI*2)/cenNum;
	var cents=[];
	var rad=str/(2*Math.sin(angle/2));
	for(var i=0;i<cenNum;i++){
		cents[i]=new Point(rad*Math.cos(i*angle+angle/2)+c.width/2,rad*Math.sin(i*angle+angle/2)+c.height/2);
	}
	return cents;
}
function Point(x, y){
	this.x=x;
	this.y=y;
}
function start(){
	erase=true;
	i=0;
	anCon=0;
}
function draw(){
	console.log(0);
	var str=document.getElementById("lado").value;
	var c=document.getElementById("canvas");
	var ctx=getContext(c);
	var centers=getCenters(c,str);
	ctx.fillStyle="#ffffff";
	var index=i;
	while(index>=centers.length){
		index-=centers.length;
	}
	ctx.strokeStyle="#ffffff";
	ctx.beginPath();
	if(anCon<angle){
		ctx.arc(centers[index].x,centers[index].y,(i+1)*str,1.5*Math.PI+i*angle,1.5*Math.PI+i*angle+anCon);
		anCon+=0.05;
	}else{
		ctx.arc(centers[index].x,centers[index].y,(i+1)*str,1.5*Math.PI+i*angle,1.5*Math.PI+i*angle+angle);
		anCon=0;
		i++;
	}
	ctx.stroke();
	for(var j=0;j<centers.length;j++){
		line(ctx,centers[j].x,centers[j].y,centers[j].x+2000*Math.cos(j*angle+angle/2),centers[j].y+2000*Math.sin(j*angle+angle/2));
	}
	if(erase){
		ctx.fillStyle="#0000";
		ctx.clearRect(0,0,c.width,c.height);
		erase=false;
	}
}
function line(context, x1,y1, x2,y2,col){
	context.save();
	context.beginPath();
	context.strokeStyle="#fff";
	context.moveTo(x1,y1);
	context.lineTo(x2,y2);
	context.stroke();
	context.restore();
}
function getContext(c){
	if(c.width!=window.innerWidth){
		c.width=window.innerWidth;
	}
	if(c.height!=window.innerHeight-100){
		c.height=window.innerHeight-100;
	}
	return c.getContext("2d");
}