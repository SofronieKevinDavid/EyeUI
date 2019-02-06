var API_URL = {
    USER: 'http://localhost:8010/user'
};

var window=new XMLHttpRequest();

window.Eye = {
    add: function(person) {
        alert(API_URL.USER);
        $.ajax({
            url: API_URL.USER,
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            data: JSON.stringify(person, null, 2)
        }).done(function (response) {
            alert(response);
            if (response.success) {
                alert("It's working.");
            }
        }).error(function () {
            alert("wrong");
        });
    },

    bindEvents: function() {
        $( ".box" ).submit(function() {
            const person = {
                name: $('input[name=name]').val(),
                password: $('input[name=password]').val()
            };
                Eye.add(person);
        });
    }
};

console.info('loading user');
Eye.bindEvents();