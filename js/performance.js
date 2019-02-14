var i=document.cookie;
var read='http://localhost:8010/history?userId='+2;
var API_URL = {
    READ: read
};

window.Eye = {
    getRow: function(history) {

        return `<tr>
            <td style="width:100px">${history.date}</td>
            <td style="width:100px">${history.result}</td>
            <td style="width:100px">${history.runnedGameLevel}</td>
            <td style="width:100px">${history.gameName}</td>
        </tr>`;
    },

    load: function () {
        $.ajax({
            url: API_URL.READ+2,
            method: "GET"
        }).done(function (histories) {
            console.info('done:', histories);
            Eye.display(histories);
        })
    },

    display: function(histories) {
        window.histories = histories;
        var rows = '';

        histories.forEach(history => rows += Eye.getRow(history));
        $('#performance tbody').html(rows);
    }
};

console.info('loading histories');
console.log("cookie = "+document.cookie);
Eye.load();