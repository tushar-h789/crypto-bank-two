

document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-input')
    const previousDepositTotal = getElementValueById('deposit-total')
    const previousBalanceTotal = getElementValueById('balance-total')
    
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    const newBalanceTotal = previousBalanceTotal + newDepositAmount

    setTextElementValueById('deposit-total', newDepositTotal)
    setTextElementValueById('balance-total', newBalanceTotal)
})

