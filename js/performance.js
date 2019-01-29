var editId;

var API_URL = {
    // CREATE: '../api/performance.json',
    READ: 'http://localhost:8010/history?userID=1',
    // UPDATE: '../api/update.json',
    DELETE: 'http://localhost:8010/history/'
};

window.Eye = {
    getRow: function(history) {
        // ES6 string template
        return `<tr>
            <td style="width:100px">${history.date}</td>
            <td style="width:100px">${history.result}</td>
            <td style="width:100px">${history.runnedGameLevel}</td>
            <td style="width:100px">${history.gameName}</td>
            <td>
                <a href='../html/performance.html' data-id='${history.id}' class='delete' style="color:whitesmoke">&#128465;</a>
            </td>
        </tr>`;
    },

    load: function () {
        $.ajax({
            url: API_URL.READ,
            method: "GET"
        }).done(function (histories) {
            console.info('done:', histories);
            Eye.display(histories);
        })
    },

    // getActionRow: function() {
    //     // ES5 string concatenation
    //     return '<tr>' +
    //         '<td><input type="text" required name="firstName" placeholder="Enter first name"></td>' +
    //         '<td><input type="text" name="lastName" placeholder="Enter last name"></td>' +
    //         '<td><input type="text" required name="phone" placeholder="Enter phone"></td>' +
    //         '<td><button type="submit">Save</button></td>' +
    //         '</tr>';
    // },

    delete: function(id) {
        alert("api url delete "+API_URL.DELETE+id);
        $.ajax({

            url: API_URL.DELETE+id,
            method: "DELETE"
        }).done(function (response) {
            if (response.success) {
                Eye.load();
            }
        }).error(function(xhr, error){
            console.debug(xhr); console.debug(error)});
    },

    add: function(person) {
        $.ajax({
            url: API_URL.CREATE,
            method: "POST",
            data: person
        }).done(function (response) {
            if (response.success) {
                Eye.load();
            }
        });
    },

    save: function(person) {
        $.ajax({
            url: API_URL.UPDATE,
            method: "POST",
            data: person
        }).done(function (response) {
            if (response.success) {
                editId = '';
                PhoneBook.load();
            }
        });
    },

    bindEvents: function() {
        // $('#performance tbody').delegate('a.edit', 'click', function () {
        //     var id = $(this).data('id');
        //     Eye.edit(id);
        // });

        $('#performance tbody').delegate('a.delete', 'click', function () {
            var id = $(this).data('id');
            console.info('click on ', this, id);
            Eye.delete(id);
        });

        $( ".add-form" ).submit(function() {
            const person = {
                firstName: $('input[name=firstName]').val(),
                lastName: $('input[name=lastName]').val(),
                phone: $('input[name=phone]').val()
            };

            if (editId) {
                person.id = editId;
                Eye.save(person);
            } else {
                Eye.add(person);
            }
        });
    },

    // edit: function (id) {
    //     // ES5 function systax inside find
    //     var editPerson = persons.find(function (person) {
    //         console.log(person.firstName);
    //         return person.id == id;
    //     });
    //     console.warn('edit', editPerson);
    //
    //     if (editId) {
    //         const cancelBtn = `<button onclick="PhoneBook.cancelEdit(this)">Cancel</button>`;
    //         $('#phone-book tbody tr:last-child() td:last-child()').append(cancelBtn);
    //     }
    //
    //     $('input[name=firstName]').val(editPerson.firstName);
    //     $('input[name=lastName]').val(editPerson.lastName);
    //     $('input[name=phone]').val(editPerson.phone);
    //     editId = id;
    // },

    // cancelEdit: function(button) {
    //     $( ".table" ).get(0).reset();
    //     editId = '';
    //     button.parentNode.removeChild(button);
    // },

    display: function(histories) {
        window.histories = histories;
        var rows = '';

        // ES6 function systax inside forEach
        histories.forEach(history => rows += Eye.getRow(history));
        // rows +=Eye.getActionRow();
        $('#performance tbody').html(rows);
    }
};

var persons = [];
console.info('loading histories');
Eye.load();
Eye.bindEvents();