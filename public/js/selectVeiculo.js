const listaVeiculos = () => {
    firebase.database().ref('veiculos/').on('value', function(snapshot) {
        for (let i = 1; i < snapshot.val().length; i++) {
            document.getElementById('veiculo').innerHTML = document.getElementById('veiculo').innerHTML + 
        `<option value="${snapshot.val()[i].nomeVeiculo}">${snapshot.val()[i].nomeVeiculo}</option>`
        }
    })

}

listaVeiculos()