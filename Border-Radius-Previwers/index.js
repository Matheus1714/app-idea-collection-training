let submit = document.getElementsByClassName('submit')[0]

const textBorderRadius = () => {
    let inputValues = document.getElementsByClassName('inputValues')
    let valuesBorder = ""
    
    for(let i = 0; i < inputValues.length; i++){
        valuesBorder += inputValues[i].value + 'px '
    }
    return valuesBorder
}

const addBoxStyle = (valuesBorder) => {
    let box = document.getElementsByClassName('box')[0]

    box.style.borderRadius = valuesBorder
}

submit.addEventListener('click', (event) => {
    event.preventDefault
    let textCode = document.getElementsByClassName('textChange')[0]
    
    let valuesBorder = textBorderRadius()

    textCode.textContent = ""
    textCode.textContent = "border-radius: "
    textCode.textContent += valuesBorder
    textCode.textContent += ";"

    addBoxStyle(valuesBorder)
})

let copy = document.getElementsByClassName('copy')[0]

copy.addEventListener('click', (event) => {
    event.preventDefault
    document.getElementsByClassName('textCode')[0].select()
    document.execCommand('copy')
})