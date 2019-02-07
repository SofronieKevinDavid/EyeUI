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
             method: "GET",
             data: {name:person.name}
         }).done(function (response) {
             alert(response);
             if (response.success) {
                 alert("It's working.");
             }
         }).error(function (xhr) {
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