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

  var d = new Date();
  var t = d.getTime();
  var counter = t;

  document.getElementById("form").addEventListener("submit",(e)=>{
    // var motorista = document.getElementById("motorista").value;
    var veiculo = document.getElementById("veiculo").value;
    var placa = document.getElementById("placa").value;
    var km = document.getElementById("km").value;
    var kmFinal = document.getElementById("kmFinal").value;
    var finalidade = document.getElementById("finalidade").value;
    var dtSaida = `${d.getFullYear()}(ano)-${d.getMonth()+1}(mes)-${d.getDate()}(dia)`;
    console.log(dtSaida); //retirar dps
    var hrSaida = `${d.getHours()}hrs-${d.getMinutes()}min-${d.getSeconds()}seg-`;
    console.log(hrSaida); // retirar dps
    e.preventDefault();
    salvarViagem(veiculo, placa, km, kmFinal, finalidade, dtSaida, hrSaida);
    form.reset();
  });

  function salvarViagem(veiculo, placa, km, kmFinal, finalidade, dtSaida, hrSaida){
      console.log(counter); // Retirar da fase de testes
      counter+=1;
      var viagem={
          id:counter,
          veiculo:veiculo,
          placa:placa,
          km:km,
          kmFinal:kmFinal,
          finalidade:finalidade,
          dtSaida:dtSaida,
          hrSaida:hrSaida
        }
      let db = firebase.database().ref("viagens/"+counter);
      db.set(viagem);
      alert('Viagem cadastrada com sucesso!');
  }