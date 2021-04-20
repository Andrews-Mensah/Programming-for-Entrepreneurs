var users = [
{
    name: 'Annabe',
    gender: 'F',
    age: '20',
    avatar: 'avatar2.png'
},

{
    name: 'Andy',
    gender: 'M',
    age: '21',
    avatar: 'avatar2.png'

},

{
    name: 'Yaw',
    gender: 'M',
    age: '25',
    avatar: 'avatar3.png'

},

{
    name: 'Akosua',
    gender: 'F',
    age: '30', 
    avatar: 'avatar4.png'
}

];



window.addEventListener ('load', function() {


    var results = document.getElementById('results');

    function search () {


        var ageField = document.getElementById('age');
        var age = ageField.value;
        console.log(age);

        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;

        var resultsHTML = '';
        var usersLength = users.length;
        for (var i = 0;i < usersLength; i++); {
            resultsHTML = resultsHTML + '' + users[i].name;
        }

    
        result.innerHTML = resultsHTML;
    }






    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', function() {

    } )
});