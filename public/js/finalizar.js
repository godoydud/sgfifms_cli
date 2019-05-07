// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6KOy0BnYCimmydblWRYKhHZwXRetUT-I",
    authDomain: "pwatcc-4a1d2.firebaseapp.com",
    databaseURL: "https://pwatcc-4a1d2.firebaseio.com",
    projectId: "pwatcc-4a1d2",
    storageBucket: "pwatcc-4a1d2.appspot.com",
    messagingSenderId: "808645356921"
};
firebase.initializeApp(config);

const preencheDados = () => {
    console.log(localStorage.id);

    let db = firebase.database().ref(`viagens/${localStorage.id}`)
    db.on('value', (snapshot) => {
        localStorage.dados = JSON.stringify({
            motorista: snapshot.val().motorista,
            placa: snapshot.val().placa,
            veiculo: snapshot.val().veiculo,
            finalidade: snapshot.val().finalidade,
            dtSaida: snapshot.val().dtSaida,
            hrSaida: snapshot.val().hrSaida,
            km: snapshot.val().km
        })


    })
}

window.onload = preencheDados()


var dados = JSON.parse(localStorage.dados)

document.getElementsByTagName('input')[0].value = dados.motorista
document.getElementsByTagName('input')[1].value = dados.placa
document.getElementsByTagName('input')[2].value = dados.veiculo
document.getElementsByTagName('input')[3].value = dados.finalidade
document.getElementsByTagName('input')[4].value = dados.dtSaida
document.getElementsByTagName('input')[5].value = dados.hrSaida
document.getElementsByTagName('input')[6].value = dados.km

const atualizaDados = async () => {
    await firebase.database().ref(`viagens/${localStorage.id}`).set({
        motorista: document.getElementsByTagName('input')[0].value,
        placa: document.getElementsByTagName('input')[1].value,
        veiculo: document.getElementsByTagName('input')[2].value,
        finalidade: document.getElementsByTagName('input')[3].value,
        dtSaida: document.getElementsByTagName('input')[4].value,
        hrSaida: document.getElementsByTagName('input')[5].value,
        km: document.getElementsByTagName('input')[6].value,
        kmFinal: document.getElementById('kmFinal').value
    })
}

document.getElementsByTagName('button')[1].addEventListener('click', async () => {
    await atualizaDados()
    alert('Viagem Finalizada')
    
})