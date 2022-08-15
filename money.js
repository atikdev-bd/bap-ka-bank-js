const deposit = document.getElementById('deposit-btn').addEventListener('click', function () {
    const amountInput = document.getElementById('amount-input');
    const amountValue = amountInput.value;
    const newDeposit = parseFloat(amountValue);
    amountInput.value = '';

    const depostiBalance = document.getElementById('deposit');
    const depositTotal = depostiBalance.innerText;
    const totalDepositAmount = parseFloat(depositTotal);

    const tatalDeposit = newDeposit + totalDepositAmount;
    depostiBalance.innerText = tatalDeposit;

    const totalBalance = document.getElementById('balance-total');
    const tatalBalanceString = totalBalance.innerText;
    const previousBalanceAmount = parseFloat(tatalBalanceString)
    const totalBalanceAmount = previousBalanceAmount + newDeposit;
    totalBalance.innerText = totalBalanceAmount;


})