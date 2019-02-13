var result=0;

function moveDiv() {
    var $span = $("#random");
    console.log("a");

    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))

        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

var one = {
        classRotate:"-webkit-transform: rotate(-90deg);",
        classRotateBack:"-webkit-transform: rotate(+90deg);",
        key:"38"//up
    };
var two = {
        classRotate:"-webkit-transform: rotate(-180deg);",
        classRotateBack:"-webkit-transform: rotate(+180deg);",
        key:"37"//left
    };
var three = {
        classRotate:" -webkit-transform: rotate(-270deg);",
        classRotateBack:" -webkit-transform: rotate(+270deg);",
        key:"40"//down
    };
var four = {
        classRotate:"-webkit-transform: rotate(-360deg);",
        classRotateBack:"-webkit-transform: rotate(+360deg);",
        key:"38"//right
    };
var arrows=[one,two,three,four];


var arrow=new Map();
arrow.set(38,"-webkit-transform: rotate(-90deg);");//up
arrow.set(37,"-webkit-transform: rotate(-180deg);");//left
arrow.set(40," -webkit-transform: rotate(-270deg);");//down
arrow.set(38,"-webkit-transform: rotate(-360deg);");//right

var a=[38,37,40,38];
var rand=38;

function rotateRandom(p){
    console.log("random ="+p);
    console.log(arrows[p]);
    x=arrow.get(p);
    $("#random").attr("style",x);
}
function rotateBack(){
    y=arrow.get(rand);
    $("#random").attr("style",y);
}



function portocala(){
    rand = a[Math.floor(Math.random() * a.length)];
    rotateRandom(rand);
    return rand;
}

function checkKey(e) {

    e = e || window.event;

    if ((e.keyCode == '38')&(rand==1)) {
        // up arrow
        result++;
    }
    else if (e.keyCode == '37'&(rand==2)) {
        // left arrow
        result++;
    }
    else if (e.keyCode == '40'&(rand==3)) {
        // down arrow
        result++;
    }
    else if (e.keyCode == '39'&(rand==4)) {
        // right arrow
        result++;
    }

    portocala();
    moveDiv();
    console.log(result);

}

document.onkeydown = checkKey;
//rotateBack();
