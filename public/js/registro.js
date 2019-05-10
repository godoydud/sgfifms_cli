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
    var dtSaida = `${d.getFullYear()}(ano)-${d.getMonth() + 1}(mes)-${d.getDate()}(dia)`;
    var hrSaida = `${d.getHours()}hrs-${d.getMinutes()}min-${d.getSeconds()}seg-`;
    e.preventDefault();
    salvarViagem(motorista, veiculo, placa, km, kmFinal, finalidade, dtSaida, hrSaida);
    form.reset();

});

const buscaTamanho = async() => {
    await firebase.database().ref('viagens/').on('value', function(snapshot) {
        id = snapshot.val().length
        console.log(snapshot.val());

        console.log(`Id: ${id}`);


    })
}

buscaTamanho()

async function salvarViagem(motorista, veiculo, placa, km, kmFinal, finalidade, dtSaida, hrSaida) {

    console.log(id);

    await firebase.database().ref("viagens/" + id).set({
        id: 1,
        motorista: motorista,
        veiculo: veiculo,
        placa: placa,
        km: km,
        kmFinal: kmFinal,
        finalidade: finalidade,
        dtSaida: dtSaida,
        hrSaida: hrSaida

    });

    alert('Viagem cadastrada com sucesso!');
    sessionStorage.id = 1;
    window.location.href = "espera.html"
}