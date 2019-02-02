var API_URL = {
    USER: 'http://localhost:8010/user'
};

var window=new XMLHttpRequest();

window.Eye = {
    add: function(person) {
        $.ajax({
            url: API_URL.USER,
            method: "POST",
            data: person
        }).done(function (response) {
            if (response.success) {
                alert("It's working.");
            }
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