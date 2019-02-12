var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");


function make_base()
{
    base_img = new Image();
    base_img.src = '../images/E.png';
    return base_img;
}


init();
function init()
{
    ctx.beginPath();
    var img=make_base();
    base_img.onload = function(){
        ctx.drawImage(img, 0, 0,4, 4);
    };

    ctx.closePath();
}

function makeNewPosition(img){
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
    makeNewPosition(img);
}