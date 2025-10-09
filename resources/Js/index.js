
// initialize DOM Elements
 const form = document.getElementById('subscribe-form');
 const emailAddress =  document.getElementById('email-address');
 const errorMessage = document.getElementById('error-message');
 const dismissBtn = document.getElementById('dismiss-btn');
 const defaultSec = document.getElementById('default-sec');
 const successSec = document.getElementById('success-sec');
 const userEmail = document.getElementById('user-email');

 // Form Validation
 form.addEventListener('submit', function(e){
    e.preventDefault();

    const emailValue = emailAddress.value.trim();

    if (!emailValue) {
        errorMessage.textContent = "Valid email required";
        emailAddress.classList.add('error');
        return;
    }
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if (!emailPattern.test(emailValue)) {
     errorMessage.textContent = "Valid email required";
     emailAddress.classList.add('error');
       return;
   }
       errorMessage.textContent = '';
       emailAddress.classList.remove('error');
       userEmail.textContent = emailValue;
       defaultSec.style.display = 'none';
       successSec.style.display= 'flex';    
 })

 // Dismiss Button
 dismissBtn.addEventListener('click', function(){
    defaultSec.style.display = 'flex';
    successSec.style.display= 'none';
     form.reset(); 
 })