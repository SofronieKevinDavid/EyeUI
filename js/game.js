var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");


var img=make_base();

function make_base()
{
    base_img = new Image();
    base_img.src = '../images/e.png';
    base_img.style.height="10%";
    base_img.style.width="10%";
    base_img.onload = function(){
        ctx.drawImage(base_img, 0, 0);
    }
    return base_img;
}

function makeNewPosition(){
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

    getNewAngle(Math.random()*90 ,Math.random()*90);
}

function getNewAngle(prev, next){
    var x = prev[1] - next[1];
    var y = prev[0] - next[0];
    var ang = Math.atan(Math.abs(y)/Math.abs(x))/(Math.PI/180)
    if(x>0&&y>0)
        return ang;
    else if(x<0&&y>0)
        return ang+90;
    else if(x>0&&y<0)
        return ang-90;
    else
        return ang+180
}

img.onkeypress =function(){
    makeNewPosition();
}