var d = new Date();
var t = d.getTime();
var counter = t;

document.getElementById("form").addEventListener("submit", (e) => {
  var motorista = localStorage.user
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

async function salvarViagem(motorista, veiculo, placa, km, kmFinal, finalidade, dtSaida, hrSaida) {

  await firebase.database().ref("viagens/" + counter).set({
    id: counter,
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
  localStorage.id = counter;
  window.location.href = "espera.html"
}