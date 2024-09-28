document.getElementById('Add-Money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValuedById('input-field')
    const pinNumber =getInputFieldValuedById('pin')

    if(isNaN(addMoney)){
        alert('Failed to add money')
        return
    }
    
    if(pinNumber===5){

        const text = textFieldValuedById('Current-balance')
        const newBalance =text+addMoney
        console.log(newBalance)
        document.getElementById('Current-balance').innerText = newBalance

        const p =document.createElement('p')
        p.innerText = ` Added: ${addMoney} TK. Balance: ${newBalance}`
        console.log(p)

        document.getElementById('transacton-form').appendChild(p)

    }

    else{
        alert('Console.log')
    }
  

})

