var API_URL = {
    READ: 'http://localhost:8010/user?name='
};

window.Eye = {
    load: function (person) {
         $.ajax({
             url: API_URL.READ+person.name,

             headers: {
                 "Content-Type": "application/json"
             },
             method: "GET",
             data: JSON.stringify(person, null, 2)
         }).done(function (response) {
             alert(response);
             if (response.success) {
                 alert("It's working.");
             }
         }).error(function () {
             alert("wrong");
         });
        /*$.ajax({
            type: "GET",
            url: "/cgi-bin/login.pl", // URL of the Perl script
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            // send username and password as parameters to the Perl script
            data: "username=" + person.name + "&password=" + person.password,
            // script call was *not* successful
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $('div#loginResult').text("responseText: " + XMLHttpRequest.responseText
                    + ", textStatus: " + textStatus
                    + ", errorThrown: " + errorThrown);
                $('div#loginResult').addClass("error");
            }, // error
            // script call was successful
            // data contains the JSON values returned by the Perl script
            success: function(data){
                if (data.error) { // script returned error
                    $('div#loginResult').text("data.error: " + data.error);
                    $('div#loginResult').addClass("error");
                } // if
                else { // login was successful
                    $('form#loginForm').hide();
                    $('div#loginResult').text("data.success: " + data.success
                        + ", data.userid: " + data.userid);
                    $('div#loginResult').addClass("success");
                } //else
            } // success
        }); // ajax*/
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