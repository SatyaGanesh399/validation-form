
function validate(){
console.log(10+10);
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let cityInput = document.getElementById('city').value
    let stateInput = document.getElementById('state').value
    let zipInput = document.getElementById('zip').value
    if(firstNameInput.length >=1){
        document.getElementById("first-name-valid").style.display = 'block'
        document.getElementById("first-name-invalid").style.display = 'none'

    }else{
        document.getElementById("first-name-invalid").style.display = 'block'
        document.getElementById("first-name-valid").style.display = 'none'
    }
    if(lastNameInput.length >=1){
        document.getElementById("last-name-valid").style.display = 'block'
        document.getElementById("last-name-invalid").style.display = 'none'

    }else{
        document.getElementById("last-name-invalid").style.display = 'block'
        document.getElementById("last-name-valid").style.display = 'none'
    }
    if(emailInput.includes('@')){
        document.getElementById("email-valid").style.display = 'block'
        document.getElementById("email-invalid").style.display = 'none'

    }else{
        document.getElementById("email-invalid").style.display = 'block'
        document.getElementById("email-valid").style.display = 'none'
    }
    if(stateInput.length >=1){
        document.getElementById("state-valid").style.display = 'block'
        document.getElementById("state-invalid").style.display = 'none'

    }else{
        document.getElementById("state-invalid").style.display = 'block'
        document.getElementById("state-valid").style.display = 'none'
    }
    if(cityInput.length >=1){
        document.getElementById("city-valid").style.display = 'block'
        document.getElementById("city-invalid").style.display = 'none'

    }else{
        document.getElementById("city-invalid").style.display = 'block'
        document.getElementById("city-valid").style.display = 'none'
    }
    if(typeof(zipInput) === 'number'){
        document.getElementById("zip-valid").style.display = 'block'
        document.getElementById("zip-invalid").style.display = 'none'

    }else{
        document.getElementById("zip-invalid").style.display = 'block'
        document.getElementById("zip-valid").style.display = 'none'
    }

}
