// Function gets input from the user (name & country) and makes an API call with that infor as parameters in the API link.

function getage(){
    const user_name = document.getElementById('username').value;
    const country = document.getElementById('country').value;
    const guess = document.getElementById('guess');

    const link = 'https://api.agify.io?name='+user_name+'&country_id='+country;
    var request = new XMLHttpRequest();
    request.open('GET', link);
    request.send();
    request.onload = ()=>{
        data = JSON.parse(request.response)
        age = data['age']
        console.log(age)
        console.log(link)
        console.log(user_name)
        // console.log(JSON.parse(request.response))

        if (age == null || age == undefined){

            if (country == "") {
                document.getElementById('result').innerHTML = 'Please select a country.';
            }
            else { 
                document.getElementById('result').innerHTML = 'Enter a valid name.';
            }
        }

        else{
            document.getElementById('result').innerHTML = 'You are '+age+' years old!';
        }
    }
}