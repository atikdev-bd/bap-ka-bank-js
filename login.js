const button = document.getElementById('click-btn').addEventListener('click', function () {
    const email = document.getElementById('email-input');
    const emailValue = email.value;


    const password = document.getElementById('password-input');
    const passwordValue = password.value;

    if (emailValue === 'atikpk707@gmail.com' && passwordValue === 'bank7') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Your Information is wrong')
    }
})
