var API_URL = {
    READ: 'http://localhost:8010/user?name='
};

window.Eye = {
    load: function (person) {
        $.ajax({
            url: API_URL.READ+person.name,
            method: "GET"
        }).done(function (person) {
            alert("right");
            return person;
        }).fail(function () {
            alert("wrong");
        });
    },

    bindEvents: function() {
        $( ".box" ).submit(function() {
            const person = {
                name: $('input[name=name]').val(),
                password: $('input[name=password]').val()
            };
            Eye.load(person);
        });
    }
};

console.info('loading if user is correct');
Eye.bindEvents();