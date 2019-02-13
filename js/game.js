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

var arrows = [
    {
        "classRotate":"rotate1",
        "key":"38"//up
    },
    {
        "classRotate":"rotate2",
        "key":"37"//left
    },
    {
        "classRotate":"rotate3",
        "key":"40"//down
    },
    {
        "classRotate":"rotate4",
        "key":"38"//right
    }
];

var a=[1,2,3,4];
var rand=1;

function rotateRandom(p){
    console.log("random ="+p);
    console.log(arrows[p-1]);
    $("#random").addClass(arrows[p-1].classRotate);
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

    moveDiv();
    console.log(result);
    portocala();
}

document.onkeydown = checkKey;
