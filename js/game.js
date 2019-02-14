var result=0;
var index=0;

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

var arrow=new Map();
arrow.set(38,"-webkit-transform: rotate(-90deg);");//up
arrow.set(37,"-webkit-transform: rotate(-180deg);");//left
arrow.set(40," -webkit-transform: rotate(-270deg);");//down
arrow.set(39,"-webkit-transform: rotate(-360deg);");//right

var a=[38,37,40,39];
var rand=39;

function rotateRandom(p){
    console.log("random ="+p);
    console.log(arrow.get(p));
    x=arrow.get(p);
    $("#random").attr("style",x);
}

function portocala(){
    rand = a[Math.floor(Math.random() * a.length)];
    rotateRandom(rand);
    return rand;
}

function checkKey(e) {

    index++;
    console.log("index = "+index);
    e = e || window.event;

    if (e.keyCode == rand) {// up arrow
        result++;
    }
    else if (e.keyCode == rand) {// left arrow
        result++;
    }
    else if (e.keyCode == rand) {// down arrow
        result++;
    }
    else if (e.keyCode == rand) {// right arrow
        result++;
    }
    portocala();
    moveDiv();
    console.log(result);
    if(index==10){
        console.log("index is big enough.");
        Eye1.bindEvents1();
    }
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var hours=today.getHours();
var minutes=today.getMinutes();
var seconds=today.getSeconds();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
if(hours<10){
    hours='0'+hours;
}

if(minutes<10){
    minutes='0'+minutes;
}

if(seconds<10){
    seconds='0'+seconds;
}


today=yyyy+'-'+dd+"-"+mm+" "+hours+":"+minutes;

console.log(today);
document.onkeydown = checkKey;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var runnedGame;

var API_URLL = {
    RUN: 'http://localhost:8010/runnedgame'
};

var window=new XMLHttpRequest();

window.Eye1 = {
    add1: function(run) {
        console.log(API_URLL.RUN);
        console.log("entered add1.");
        $.ajax({
            url: API_URLL.RUN,
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            data: JSON.stringify(run, null, 2)
        }).done(function (data) {
            console.info('success' +JSON.stringify(data));
            runnedGame=data.id;
            console.log("id is equal to "+data.id);
            console.log(API_URLL.RUN);
            Eye2.bindEvents2();
        }).fail(function (response) {
            console.info('errrrrrror');
            console.info(response);
            window.location.href="../html/usernameIncorrect.html";
        });
    },

    bindEvents1: function() {
        console.info('loading RUN');
        const run = {
            level: 1,
            gameDefinitionId: 1,
            userId:1
        };
        console.log('submitting data 1');
        console.log(run);
        Eye1.add1(run);

        return false;
    }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var API_URL = {
    HISTORY: 'http://localhost:8010/history'
};

var window=new XMLHttpRequest();

window.Eye2 = {
    add2: function(person) {
        console.log("entered add2.");
        $.ajax({
            url: API_URL.HISTORY,
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            data: JSON.stringify(person, null, 2)
        }).done(function (data) {
            console.info('success'+JSON.stringify(data));
            console.log("id is equal to "+data.id);
            console.log(API_URL.HISTORY);
            window.location.href="../html/home.html";
        }).fail(function (response) {
            console.info('errrrrrror');
            console.info(response);
            window.location.href="../html/usernameAlreadyTaken.html";
        });
    },

    bindEvents2: function() {
        console.info('loading HISTORY');
            const person = {
                result: result,
                date: today,
                runnedGameId: runnedGame,
                userId:1
            };
            console.log('submitting data 2');
            console.log(person);
            Eye2.add2(person);
            return false;
    }
};



