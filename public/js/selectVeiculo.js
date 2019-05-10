const listaVeiculos = () => {
    firebase.database().ref('veiculos/').on('value', function(snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            document.getElementById('veiculo').innerHTML = document.getElementById('veiculo').innerHTML + 
        `<option value="${snapshot.val()[i].nomeVeiculo}">${snapshot.val()[i].nomeVeiculo}</option>`
        }
    })

}


const buscaKm = () => {
    console.log(`Entrou no buscaKM`);
    
    let placa = document.getElementById('placa').value

    firebase.database().ref('veiculos/').on('value', function(snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            if (snapshot.val()[i].placaVeiculo == placa) {
                console.log(snapshot.val()[i].kmVeiculo);
                
                document.getElementById('km').value = snapshot.val()[i].kmVeiculo
            }
        }
    })
}


const buscaplaca = () => {
    let nomeVeiculo = document.getElementById('veiculo').value

    firebase.database().ref('veiculos/').on('value', function(snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            if (snapshot.val()[i].nomeVeiculo == nomeVeiculo) {
                document.getElementById('placa').innerHTML = document.getElementById('placa').innerHTML +
                `<option value="${snapshot.val()[i].placaVeiculo}">${snapshot.val()[i].placaVeiculo}</option>`
            }
        }
    })

}

listaVeiculos()