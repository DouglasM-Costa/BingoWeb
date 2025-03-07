var option = document.querySelector("div#option")
var button = document.querySelector("input#button")


function createNum(){// function create number
    const max = 76
    const min = 1
    let num = parseInt(Math.random()*(max-min)+min)  
    return num
}

function validate (value, list){
    for(i in list ){
        if (i == value){
            return false
        }else{
            return value
        }
    }
    
}

function start(){ // function for starting game
    let play = confirm('Deseja começar uma nova rodada?')
    if (play == true){
        let list = []

        const call = document.createElement('input')
        call.type = 'button'
        call.value = 'Chamar próximo número'
        option.appendChild(call)

        const stop = document.createElement('input')
        stop.type = 'button'
        stop.value = 'Finalizar'
        option.appendChild(stop)
    }else{alert ('fica para uma próxima')}
}
