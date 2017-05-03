var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var w = window.innerWidth-9;
var h = window.innerHeight-20;

var snum=6;
var sSnum=0;
var off=0;
var offCount=0;
var rad=400;
var xs=[];
var ys=[];
c.width = w;
c.height = h;
ctx.translate(w/2,h/2);
var colOff=0;
var colMode=0;
var mode = 2;
var mColor = false;
var modeText="Wea 3D";



function dynamic(e){
	console.log(e.keyCode);
	if(e.keyCode == 119){
		snum++;

	}else if(e.keyCode == 115){
		snum--;

	}
	if(e.keyCode ==100){
		rad-=1;
	}else if(e.keyCode == 101){
		rad+=10;
	}
	if(e.keyCode==114){
		colMode++;
		if(colMode>2){
			colMode=0;
		}
	}else if(e.keyCode==102){
		colMode--;
		if(colMode<0){
			colMode=2;
		}
	}
	if(e.keyCode==113){
		offCount+=1;
	}else if(e.keyCode==97){
		offCount-=1;
	}
	if(e.keyCode==111 || e.keyCode==108){
		mColor=!mColor;
	}
	if(e.keyCode==32){
		mode=mode>2?mode+1:0;
	}
	if(e.keyCode==13){
		snum=sSnum;
		sSnum=0;
	}
	if(e.keyCode>=48 && e.keyCode<=57){
		console.log(e.keyCode-48);
		sSnum+=e.keyCode-48;
	}

}

function update(){
	w = window.innerWidth;
    h = window.innerHeight;
	var deg=(Math.PI*2)/snum;
	xs=[];
	ys=[];
	for(var i=0;i<snum;i++){
		xs[i]=Math.cos(deg*i+off)*rad;
		ys[i]=Math.sin(deg*i+off)*rad;
	}
	off+=offCount/100;
	colOff+=1;
	if(colOff>=360){
		colOff=0;
	}

}
function line(context, x1,y1, x2,y2,col){
	context.save();
	context.beginPath();
	if(colMode==0){
		context.strokeStyle="#fff";
	}else if(colMode==1){
		context.strokeStyle="hsl("+colOff+",100%,50%)";
	}else if(colMode==2){
		context.strokeStyle="hsl("+col+",100%,50%)";
	}
	context.moveTo(x1,y1);
	if(mode==0){
		context.lineTo(x2,y2);
	}
	else if(mode==1){
		context.arc(x1,y1,rad,0,Math.PI/rad);
	}else if(mode==2){
		context.lineTo(x2,y2);

		var angle = (Math.PI*2)/snum;
		var str = rad*(2*Math.sin(angle/2));
		for(var i=0;i<200;i++){
			var index=i;
			while(index>=xs.length){
				index-=xs.length;
			}
			context.arc(xs[index],ys[index],(i)*str,1.5*Math.PI+i*angle+offCount,1.5*Math.PI+i*angle+offCount+angle);
		}

	}
	context.stroke();
	context.restore();
}
function draw(){
	update();
	if(mColor){
		ctx.fillStyle="hsla(0,100%,0%,0.05)";
	}
	else{
		ctx.fillStyle="#000";
	}
	
	ctx.fillRect(-w/2,-h/2,w,h);
	ctx.fillStyle="#ffffff";
	ctx.font = "20px Arial";
	ctx.fillText("Lados: "+snum,-w/2+50,-h/2+55);
	ctx.fillText("Velocidad: "+offCount,-w/2+180,-h/2+55);
	//ctx.fillText("Modo: " + modeText,-w/2+50, -h/2+100);

	//ctx.fillText("Girar: Q/A",-w/2+50, -h/2+150);
	//ctx.fillText("+ - Lados: W/S",-w/2+50, -h/2+200);
	//ctx.fillText("Tamaño: E/D",-w/2+50, -h/2+250);
	//ctx.fillText("Color: R/F",-w/2+50, -h/2+300);


	var col=0;
    for(var i=0;i<xs.length;i++){
    	for(var j=0;j<=xs.length/2;j++){
    		if(i+j>=xs.length){
    			line(ctx,xs[i],ys[i],xs[i+j-xs.length],ys[i+j-xs.length],col);
    		}else{
    			line(ctx,xs[i],ys[i],xs[i+j],ys[i+j],col);
    		}
    		col++;
    	}

    }
}