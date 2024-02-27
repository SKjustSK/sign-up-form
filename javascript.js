// Creating password error text
let passwordBox = document.querySelector('.passwordBox');

let errorText = document.createElement("div");
errorText.value = "*Passwords do not match";
errorText.classList.add('error-text');

passwordBox.appendChild(errorText);

// Creating password error logic
errorText = document.querySelector('.error-text');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');

password.addEventListener('input', matching);
confirmPassword.addEventListener('input', matching);

function matching()
{
    console.log(password.value);
    console.log(confirmPassword.value);

    if (password.value !== confirmPassword.value)
    { 
        console.log('not same');
        errorText.textContent = "Passwords do not match";
        password.classList.add('error');
        confirmPassword.classList.add('error');
        password.classList.remove('valid');
        confirmPassword.classList.remove('valid');
    }
    else
    {
        console.log('same');
        errorText.textContent = "";
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        password.classList.add('valid');
        confirmPassword.classList.add('valid');
    }
}





