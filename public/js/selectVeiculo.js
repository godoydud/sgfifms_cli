const listaVeiculos = () => {
    console.log("Entrou na listagem de veìculos");

    firebase.database().ref('veiculos/').once('value', function (snapshot) {
        let veiculos = (Object.entries(snapshot.val()))
        for (let i = 0; i < veiculos.length; i++) {

            
            document.getElementById('veiculo').innerHTML = document.getElementById('veiculo').innerHTML +
                `<option value="${veiculos[i][1].nomeVeiculo}">${veiculos[i][1].nomeVeiculo}</option>`
        }
    })

}


const buscaKm = () => {
    console.log(`Entrou no buscaKM`);

    
    let placa = document.getElementById('placa').value
    
    firebase.database().ref('veiculos/').on('value', function (snapshot) {
        let veiculos = (Object.entries(snapshot.val()))
        for (let i = 0; i < veiculos.length; i++) {
            if (veiculos[i][1].placaVeiculo == placa) {
                sessionStorage.idVeiculo = veiculos[i][1].id
            
                document.getElementById('km').value = veiculos[i][1].kmVeiculo
            }
        }
    })
}


const buscaplaca = () => {
    let nomeVeiculo = document.getElementById('veiculo').value
    

    firebase.database().ref('veiculos/').on('value', function (snapshot) {
        let veiculos = (Object.entries(snapshot.val()))
        
        for (let i = 0; i < veiculos.length; i++) {
            if (veiculos[i][1].nomeVeiculo == nomeVeiculo) {
                sessionStorage.idVeiculo = veiculos[i][1].id
                document.getElementById('placa').innerHTML = document.getElementById('placa').innerHTML +
                    `<option id="${i}" value="${veiculos[i][1].placaVeiculo}">${veiculos[i][1].placaVeiculo}</option>`
            }
        }
    })

}

window.onload = listaVeiculos()