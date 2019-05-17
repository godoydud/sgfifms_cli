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
const kmFinal = 0

const preencheDados = () => {
    console.log(sessionStorage.id);

    let db = firebase.database().ref(`viagens/${sessionStorage.id}`)
    db.on('value', (snapshot) => {
        document.getElementsByTagName('input')[0].value = snapshot.val().motorista
        document.getElementsByTagName('input')[1].value = snapshot.val().placa
        document.getElementsByTagName('input')[2].value = snapshot.val().veiculo
        document.getElementsByTagName('input')[3].value = snapshot.val().finalidade
        document.getElementsByTagName('input')[4].value = snapshot.val().dtSaida
        document.getElementsByTagName('input')[5].value = snapshot.val().hrSaida
        document.getElementsByTagName('input')[6].value = snapshot.val().km
        sessionStorage.kmAtual = snapshot.val().km
        console.log(sessionStorage.kmAtual);
        

    })
}


window.onload = preencheDados()



const atualizaDados = async() => {
    if (sessionStorage.kmAtual > document.getElementById('kmFinal').value) {
        alert(`A quilometragem final e menor que a velocidade inicial`)        
        document.getElementById(`kmFinal`).style.borderColor = `red`
    
    }else{
        await firebase.database().ref(`viagens/${sessionStorage.id}`).set({
            motorista: document.getElementsByTagName('input')[0].value,
            placa: document.getElementsByTagName('input')[1].value,
            veiculo: document.getElementsByTagName('input')[2].value,
            finalidade: document.getElementsByTagName('input')[3].value,
            dtSaida: document.getElementsByTagName('input')[4].value,
            hrSaida: document.getElementsByTagName('input')[5].value,
            km: document.getElementsByTagName('input')[6].value,
            kmFinal: document.getElementById('kmFinal').value
        })
       

        await firebase.database().ref(`veiculos/${sessionStorage.idVeiculo}`).update({        
            kmVeiculo:document.getElementById('kmFinal').value
        })

        window.location.replace("registro.html");
    alert('Viagem Finalizada')
    }
}

    document.getElementById('buttonFinalizar').addEventListener('click', async() => {
    event.preventDefault()
    await atualizaDados()
    

})

    



