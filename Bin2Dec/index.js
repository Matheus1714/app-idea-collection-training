let submit = document.getElementById('submit')

const transformOnDecimal = (value) => {
    let digit = parseInt(value, 2)
    return digit
}

const eraseMessagesError = () => {
    let errorMessage = document.getElementsByClassName('errorMessage')
    while(errorMessage.length !== 0){
        errorMessage[0].parentNode.removeChild(errorMessage[0])
    }
}

const addErrorMessages = (arrayErrorMessages) => {
    let messageRequired = document.getElementsByClassName('messageRequired')[0]
    if(arrayErrorMessages.length !== 0){
        arrayErrorMessages.map((error) => {
            let h1 = document.createElement('h1')
            messageRequired.appendChild(h1)
            h1.classList.add("errorMessage")
            h1.textContent = error
        })
    }
}

const haveErrorInArray = (validation) => {
    for(let i = 0; i < validation.length; i++){
        if(validation[i] === false){
            return false
        }
    }
    return true
}

const validateInput = (input) => {
    let validation = []
    let arrayErrorMessages = []

    eraseMessagesError()

    // Limit of 8
    // if(input.length > 8){
    //     arrayErrorMessages.push("Size is greater than 8.")
    //     validation.push(false)
    // }else{
    //     validation.push(true)
    // }


    if(/[23456789]/.test(input)){
        arrayErrorMessages.push("Input has number diferents of 0 and 1.")
        validation.push(false)
    }else{
        validation.push(true)
    }

    addErrorMessages(arrayErrorMessages)

    return haveErrorInArray(validation)
}

submit.addEventListener('click', (event) => {
    event.preventDefault
    let inputValue = document.getElementById('inputValue')
    let resultValue = document.getElementsByClassName('resultValue')[0]
    
    if(validateInput(inputValue.value)){
        resultValue.textContent = transformOnDecimal(inputValue.value)

    }else{
        resultValue.textContent = ""
    }
})