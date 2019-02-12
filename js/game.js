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
        "rotation":"rotate(-90deg)",
        "key":"38"//up
    },
    {
        "rotation":"rotate(-180deg)",
        "key":"37"//left
    },
    {
        "rotation":"rotate(-270deg)",
        "key":"40"//down
    },
    {
        "key":"38"//right
    }
];

var a=[1,2,3,4];
var rand=1;

function rotateRandom(l){
    x=arrows[l];
    $("#random").style.webkitTransform=x.rotation;
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
    portocala();
}

document.onkeydown = checkKey;
