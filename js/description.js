var API_URL = {
    READ: 'http://localhost:8010/gamedefinition/1'
};
var description;

window.Eye = {
    load: function () {
        $.ajax({
            url: API_URL.READ,
            method: "GET"
        }).done(function (histories) {
            console.info('done:', histories);
            description=histories.description;
            Eye.display();
        })
    },

    display: function() {
        console.log("entered display.")
        console.log(description);
        $('#performance tbody').html(description);
        document.getElementById("performance").innerHTML=description;
        document.getElementById("performance").style.color="white";
    }
};

console.info('loading histories');
Eye.load();