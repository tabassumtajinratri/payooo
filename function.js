function getInputFieldValuedById(id){
    const inputValue = document.getElementById(id).value
    const inputNumber= parseFloat(inputValue)
    return inputNumber

}

function textFieldValuedById(id){
    const textField = document.getElementById(id).innerText
    const text = parseFloat(textField)
    return text

}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transacton-form').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

