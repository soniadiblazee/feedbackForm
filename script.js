document.getElementById('t')
addEventListener('submit',function (e){
e.preventDefault();
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const email = document.getElementById('email').value;
const age = document.getElementById('age').value;
const phone = document.getElementById('phone').value;
const street = document.getElementById('street').value;
const city = document.getElementById('city').value;
const state = document.getElementById('state').value;
const zip = document.getElementById('zip').value;

let cont = true

this.alert(firstName + " " + lastName + ", " + email)

if (firstName === '' || lastName === ''){
    alert('enter first and last name')
}
if (age < 18){
    this.alert('MINOR : (')
}



});