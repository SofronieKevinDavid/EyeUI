var API_URL = {
    READ: 'http://localhost:8010/user'
};

window.Eye = {
    load: function (person) {
         $.ajax({
             url: API_URL.READ,

             headers: {
                 "Content-Type": "application/json"
             },
             contentType: "application/json",
             method: "GET",
             data: {name:person.name}
         }).done(function (data, textStatus, jqXHR) {
             console.log('success ' + JSON.stringify(data));
             window.location.href="../html/home.html";
         }).fail(function (response) {
             console.log("error");
             console.log(response);
             window.location.href="../html/usernameOrPasswordIncorrect.html";
         });
    },

    bindEvents: function() {
        $( ".box" ).submit(function() {
            const person = {
                name: $('input[name=name]').val(),
                password: $('input[name=password]').val()
            };
            Eye.load(person);
            return false;
        });
    }
};

console.info('loading if user is correct');
Eye.bindEvents();