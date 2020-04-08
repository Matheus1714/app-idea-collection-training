class Calculator{
    numbers = ['', '']
    index = 0
    op = ''
    oldValue = ''

    isOperation = (value, screen) => {
        this.oldValue = value
        if(value === '+' || value === '-' || value === '*' || value === '/'){
            if(this.numbers[1] !== '' || this.op !== ''){
                this.sendResult(screen)
            }
            this.setOperation(value)
            return true
        }
        return false
    }
    eraseCache = (screen) => {
        this.numbers = ['', '']
        this.index = 0
        this.setNumberScreen(screen)
    }
    eraseOldValue = () => {
        if(this.oldValue === '+' || this.oldValue === '-' || this.oldValue === '*' || this.oldValue === '/'){
            this.op = ''
        }else{
            this.numbers[this.index] = ''
            if(this.index === 2){
                this.index = 1
            }
        }
        this.oldValue = ''
    }
    writeProxyNumber = () => {
        this.index = 1
    }
    concatNumber = (value, screen) => {
        if(this.numbers[this.index].length < 8){
            this.numbers[this.index] += value
            this.setNumberScreen(screen)
            this.oldValue = value
        }
    }
    setOperation = (value) => {
        this.op = value
    }
    sendResult = (screen) => {
        if(this.numbers[0] !== '' || this.numbers[1] !== ''){
            switch(this.op){
                case '+':
                    screen.textContent = Number(this.numbers[0]) + Number(this.numbers[1])
                    break
                case '-':
                    screen.textContent = Number(this.numbers[0]) - Number(this.numbers[1])
                    break
                case '*':
                    screen.textContent = Number(this.numbers[0]) * Number(this.numbers[1])
                    break
                case '/':
                    screen.textContent = Number(this.numbers[0]) / Number(this.numbers[1])
                    break
            }
            this.index = 0
            this.numbers[0] = screen.textContent
            this.numbers[1] = ''
        }
    }
    setNumberScreen = (screen) => {
        if(this.numbers[this.index] === ''){
            screen.textContent = '0'
        }else{
            screen.textContent = this.numbers[this.index]
        }
    }
}