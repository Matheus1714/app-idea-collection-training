let operations = document.getElementsByClassName('box')
let screen = document.getElementsByClassName('box-screen')[0]
let calculator = new Calculator()

for(let i = 0; i < operations.length; i++){
    operations[i].addEventListener('click' , (event) => {
        event.preventDefault
        
        let value = event.toElement.name

        if(calculator.isOperation(value, screen)){
            calculator.writeProxyNumber()
        }else if(value === 'C'){
            calculator.eraseOldValue(screen)
        }else if(value === 'CA'){
            calculator.eraseCache(screen)
        }else if(value === '='){
            calculator.sendResult(screen)
        }else{
            calculator.concatNumber(value, screen)
        }
    })
}