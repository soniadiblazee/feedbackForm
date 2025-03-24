document.getElementById('t')
addEventListener('submit',function (e){
e.preventDefault();
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const email = document.getElementById('email').value;

this.alert(firstName + " " + lastName + ", " + email)

if (firstName === '' || lastName === ''){
    alert('enter first and last name')
}


});