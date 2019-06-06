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
    var d = new Date();
    var t = d.getTime();

    let db = firebase.database().ref(`viagens/${sessionStorage.id}`)
    db.on('value', (snapshot) => {
        document.getElementsByTagName('input')[0].value = snapshot.val().motorista
        document.getElementsByTagName('input')[1].value = snapshot.val().placa
        document.getElementsByTagName('input')[2].value = snapshot.val().veiculo
        document.getElementsByTagName('input')[3].value = snapshot.val().finalidade
        document.getElementsByTagName('input')[4].value = snapshot.val().dtSaida
        document.getElementsByTagName('input')[5].value = snapshot.val().hrSaida
        if(d.getDate() < 10){
            document.getElementsByTagName('input')[6].value = `0${d.getDate()}/0${d.getMonth() + 1}/${d.getFullYear()}`
        }else{
            document.getElementsByTagName('input')[6].value = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
        }
        document.getElementsByTagName('input')[7].value = `${d.getHours()}:${d.getMinutes()}`;
        document.getElementsByTagName('input')[8].value = snapshot.val().km
        sessionStorage.kmAtual = snapshot.val().km
        console.log(sessionStorage.idVeiculo);
       
        

    })
}


window.onload = preencheDados()



const atualizaDados = async() => {
    console.log(sessionStorage.idVeiculo);
    
    if (sessionStorage.kmAtual > document.getElementById('kmFinal').value) {
        alert(`A quilometragem final não pode ser menor que a quilometragem inicial`)        
        document.getElementById(`kmFinal`).style.borderColor = `red`
    
    }else{
        await firebase.database().ref(`viagens/${sessionStorage.id}`).set({
            motorista: document.getElementsByTagName('input')[0].value,
            placa: document.getElementsByTagName('input')[1].value,
            veiculo: document.getElementsByTagName('input')[2].value,
            finalidade: document.getElementsByTagName('input')[3].value,
            dtSaida: document.getElementsByTagName('input')[4].value,
            hrSaida: document.getElementsByTagName('input')[5].value,
            dtChegada: document.getElementsByTagName('input')[6].value,
            hrChegada: document.getElementsByTagName('input')[7].value,
            km: document.getElementsByTagName('input')[8].value,
            kmFinal: document.getElementById('kmFinal').value,
        })
       
        await firebase.database().ref(`veiculos/${sessionStorage.idVeiculo}`).update({        
            kmVeiculo:document.getElementById('kmFinal').value
        })

        // await firebase.database().ref().update({        
        //     numViagens = +1
        // })

        window.location.replace("registro.html");
    alert('Viagem Finalizada')
    }
}

    document.getElementById('buttonFinalizar').addEventListener('click', async() => {
    event.preventDefault()
    await atualizaDados()
    

})

    



