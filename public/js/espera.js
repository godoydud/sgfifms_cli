const relogio = () => {
    var date = new Date()

    // document.getElementsByTagName('span')[0].innerHTML = date.getHours()
    // document.getElementsByTagName('span')[1].innerHTML = date.getMinutes()
    // document.getElementsByTagName('span')[2].innerHTML = date.getSeconds()
    if(date.getHours() < 10){
        document.getElementsByTagName('span')[1].innerHTML = `0${date.getHours()}`
    }else{
        document.getElementsByTagName('span')[1].innerHTML = `${date.getHours()}`
    }

    if(date.getMinutes() < 10){
        document.getElementsByTagName('span')[2].innerHTML = `0${date.getMinutes()}`
    }else{
        document.getElementsByTagName('span')[2].innerHTML = `${date.getMinutes()}`
    }

    document.getElementsByTagName('span')[0].innerHTML = `${devolveDiaSemana(date)}, ${date.getDate()} ${devolveMes(date)}`

}

const devolveDiaSemana = (date) => {
    if(date.getDay() == 1){
        return `Seg`
    }
    else if(date.getDay() == 2){
        return `Ter`
    }
    else if(date.getDay() == 3){
        return `Qua`
    }
    else if(date.getDay() == 4){
        return `Qui`
    }
    else if(date.getDay() == 5){
        return `Sex`
    }
    else if(date.getDay() == 6){
        return `Sab`
    }
    else if(date.getDay() == 7){
        return `Dom`
    }
}

const devolveMes = (date) =>{
    if(date.getMonth() == 0){
        return `Jan`
    }
    else if(date.getMonth() == 1){
        return `Fev`
    }
    else if(date.getMonth() == 2){
        return `Mar`
    }
    else if(date.getMonth() == 3){
        return `Abr`
    }
    else if(date.getMonth() == 4){
        return `Mai`
    }
    else if(date.getMonth() == 5){
        return `Jun`
    }
    else if(date.getMonth() == 6){
        return `Jul`
    }
    else if(date.getMonth() == 7){
        return `Ago`
    }
    else if(date.getMonth() == 8){
        return `Set`
    }
    else if(date.getMonth() == 9){
        return `Out`
    }
    else if(date.getMonth() == 10){
        return `Nov`
    }
    else if(date.getMonth() == 11){
        return `Dez`
    }
}

window.setInterval('relogio()', 1000)