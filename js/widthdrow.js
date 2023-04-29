document.getElementById('widthdrow-btn').addEventListener('click', function(){
    const newWidthdrowAmount = getInputFieldValueById('widthdrow-input')
    const previousWidthdrowTotal = getElementValueById('widthdrow-total')

    const newWidthdrowTotal = previousWidthdrowTotal + newWidthdrowAmount;

    setTextElementValueById('widthdrow-total', newWidthdrowTotal)

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWidthdrowAmount;
    setTextElementValueById('balance-total', newBalanceTotal)
})