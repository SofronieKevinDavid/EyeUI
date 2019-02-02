var API_URL = {
    READ: 'http://localhost:8010/user?name='
};

window.Eye = {
    load: function (person) {
        $.ajax({
            url: API_URL.READ+person.name,
            method: "GET"
        }).done(function (person) {
            return person;
        })
    },


    bindEvents: function() {
        $( ".box" ).submit(function() {
            const person = {
                name: $('input[name=name]').val(),
                password: $('input[name=password]').val()
            };

            return person;
        });
    },

    final: function(){
        var person=Eye.bindEvents();
        var person2=Eye.load(person);
        if(person==person2){
            url:'../html/home.html';
        }else{
            url:'../html/login.html'
        }

    }
};

console.info('loading if user is correct');
Eye.final();