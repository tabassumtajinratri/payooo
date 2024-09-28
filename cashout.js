document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashMoney = getInputFieldValuedById('input-field-cashout')
    const pinNumber =getInputFieldValuedById('pin-cash-out')

    if(isNaN(cashMoney)){
        alert('Failed to add money')
        return
    }

    if(pinNumber===5){
        const text = textFieldValuedById('Current-balance')

        if(cashMoney>text){
            alert('Failed to add money')
            return
        }



        const newBalance =text-cashMoney
        console.log(newBalance)
        document.getElementById('Current-balance').innerText = newBalance

        const div = document.createElement('div')
        div.classList.add('bg-yellow-300')
        div.innerHTML= ` <h4 class='text-2xl font-bond'> Cash Out </h4>
                         <p>${cashMoney} withdraw. New Balance ${newBalance} <p/>
        
        `

        document.getElementById('transacton-form').appendChild(div)
    }

    

    else{
        alert('Console.log')
    }
  

})
