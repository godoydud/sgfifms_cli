var d = new Date();
var t = d.getTime();
var id


document.getElementById("form").addEventListener("submit", (e) => {
    var motorista = sessionStorage.user
    var veiculo = document.getElementById("veiculo").value;
    var placa = document.getElementById("placa").value;
    var km = document.getElementById("km").value;
    var kmFinal = document.getElementById("kmFinal").value;
    var finalidade = document.getElementById("finalidade").value;
    if(d.getDate() < 10 || d.getMonth() <10){
        var dtSaida = `0${d.getDate()}/0${d.getMonth() + 1}/${d.getFullYear()}`   
    }else{
        var dtSaida = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`   
    }
    if(d.getMinutes() < 10 ){
        var hrSaida = `${d.getHours()}:0${d.getMinutes()}`;
    }else{
        var hrSaida = `${d.getHours()}:${d.getMinutes()}`;
    }
    
    e.preventDefault();

    if(veiculo == "Insira Veículo..."){
        window.location.reload("registro.html")
        alert("Selecione o veículo desejado.")
    }

    if(placa == "Insira Placa..."){
        window.location.reload("registro.html")
        alert("Selecione a placa do veículo.")
    }
    if(finalidade == ""){
        window.location.reload("registro.html")
        alert("Insira Finalidade para prosseguir")
    
    }else{
        salvarViagem(motorista, veiculo, placa, km, kmFinal, finalidade, dtSaida, hrSaida);
    form.reset();
    }
    
});

const buscaTamanho = async() => {
    await firebase.database().ref('viagens/').once('value', function(snapshot) {
        id = snapshot.val().length
        console.log(snapshot.val());

        console.log(`Id: ${id}`);


    })
}

buscaTamanho()

async function salvarViagem(motorista, veiculo, placa, km, kmFinal, finalidade, dtSaida, hrSaida) {

    console.log(id);

    await firebase.database().ref("viagens/" + id).set({
        id: id,
        motorista: motorista,
        veiculo: veiculo,
        placa: placa,
        km: km,
        kmFinal: kmFinal,
        finalidade: finalidade,
        dtSaida: dtSaida,
        hrSaida: hrSaida

    });

    await firebase.database().ref("contViagens").set(id);
    sessionStorage.id = id;
    alert("Viagem cadastrada com sucesso!")
    window.location.replace('espera.html')
}

async function guardarContador(id) {

    console.log(id);

    await firebase.database().ref(contViagens).set({
        id: contViagens,


    });
}
