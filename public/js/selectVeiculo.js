const listaVeiculos = () => {
    console.log("Entrou na listagem de veìculos");

    firebase.database().ref('veiculos/').once('value', function (snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            console.log(snapshot.val());

            document.getElementById('veiculo').innerHTML = document.getElementById('veiculo').innerHTML +
                `<option value="${snapshot.val()[i].nomeVeiculo}">${snapshot.val()[i].nomeVeiculo}</option>`
        }
    })

}


const buscaKm = () => {
    console.log(`Entrou no buscaKM`);

    
    let placa = document.getElementById('placa').value
    

    firebase.database().ref('veiculos/').on('value', function (snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            if (snapshot.val()[i].placaVeiculo == placa) {
                console.log(snapshot.val()[i].kmVeiculo);
                sessionStorage.idVeiculo = i
                
                document.getElementById('km').value = snapshot.val()[i].kmVeiculo
            }
        }
    })
}


const buscaplaca = () => {
    let nomeVeiculo = document.getElementById('veiculo').value

    firebase.database().ref('veiculos/').on('value', function (snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            if (snapshot.val()[i].nomeVeiculo == nomeVeiculo) {
                document.getElementById('placa').innerHTML = document.getElementById('placa').innerHTML +
                    `<option id="${i}" value="${snapshot.val()[i].placaVeiculo}">${snapshot.val()[i].placaVeiculo}</option>`
            }
        }
    })

}

window.onload = listaVeiculos()