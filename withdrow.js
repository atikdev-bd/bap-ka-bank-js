const withdrow = document.getElementById('withdrow-btn').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowValueString = withdrowInput.value;
    const withdrowValue = parseFloat(withdrowValueString);
    withdrowInput.value = '';

    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowBalance = withdrowTotal.innerText;
    const withdrowTotalBalance = parseFloat(withdrowBalance)

    const totalWithdrowBalance = withdrowTotalBalance + withdrowValue;

    withdrowTotal.innerText = totalWithdrowBalance;

    const balance = document.getElementById('balance-total');
    const balanceInput = balance.innertext;
    const totalBalance = parseFloat(balanceInput) ;
    // const newBalanceTotal = totalBalance - ;
    // balance.innertext = newBalanceTotal;
    console.log(totalBalance)



})