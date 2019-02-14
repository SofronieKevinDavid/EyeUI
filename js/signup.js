var API_URL = {
    USER: 'http://localhost:8010/user'
};

var window=new XMLHttpRequest();

window.Eye = {
    add: function(person) {
        // alert(API_URL.USER);
        $.ajax({
            url: API_URL.USER,
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            data: JSON.stringify(person, null, 2)
        }).done(function (response, data) {
            console.info('success'+JSON.stringify(data));
            console.info(response);
            window.location.href="../html/home.html";
        }).fail(function (response) {
            console.info('errrrrrror');
            console.info(response);
            window.location.href="../html/usernameAlreadyTaken.html";
        });
    },

    bindEvents: function() {
        $( ".box" ).submit(function() {
            const person = {
                name: $('input[name=name]').val(),
                password: $('input[name=password]').val()
            };
            console.log('submitting data');
            console.log(person);
            Eye.add(person);
            return false;
        });
    }
};

console.info('loading user');
Eye.bindEvents();