function Validation(){
    let name = document.querySelector('#inputName').value;
    if (name == ''){
        alert ("Please, enter your name");
        return false
    }

    let password = document.querySelector('#inputPassword3').value;
    if (password == ''){
        alert ("Please, provide password");
        return false
    }
    else if (password.length <= 6){
        alert ("Password must be longer than 6 characters");
        return false
    }
        
    let email = document.querySelector('#inputEmail3').value;
    if (email == ''){
        alert ("Please, enter a valid e-mail address");
        return false
    }
    
    let birthday = document.querySelector('#inputBirthday').value;
    if (birthday == 'dd'){
        alert ("Please, select date of your birthday");
        return false
    }

    let birthmonth = document.querySelector('#inputBirthmonth').value;
    if (birthmonth == 'mm'){
        alert ("Please, select month of your birthday");
        return false
    }

    let birthyear = document.querySelector('#inputBirthyear').value;
    if (birthyear == 'yy'){
        alert ("Please, select year of your birthday");
        return false
    }

    let city = document.querySelector('#inputCity').value;
    if (city == ''){
        alert ("Please, provide a city");
        return false
    }

    let country = document.querySelector('#inputCountry').value;
    if (country == ''){
        alert ("Please, provide a country");
        return false
    }
    
    let agreement = document.querySelector('#inlineRadio2');
    if (agreement.checked){
        alert ("Sorry, you can not be a member of our website if you do not agree to the Terms of Service");
        return false
    }

    alert('Welcome to our website, ' + name + '!');
}

let button = document.querySelector('.btn');
button.addEventListener("click", Validation);