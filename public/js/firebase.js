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
    var motorista = document.getElementById("motorista".value);
    var veiculo = document.getElementById("veiculo").value;
    var placa = document.getElementById("placa").value;
    var km = document.getElementById("km").value;
    var dtSaida = document.getElementById("dtSaida").value;
    var hrSaida = document.getElementById("hrSaida").value;
    e.preventDefault();
    salvarViagem(motorista, veiculo, placa, km, dtSaida, hrSaida);
    form.reset();
  });

  function salvarViagem(motorista, veiculo, placa, km, dtSaida, hrSaida){
      console.log(counter);
      counter+=1;
      console.log(counter);
      var motorista={
          id:counter,
          motorista:motorista,
          veiculo:veiculo,
          placa:placa,
          km:km,
          dtSaida:dtSaida,
          hrSaida:hrSaida
      }
      let db = firebase.database().ref("viagens/"+counter);
      db.set(motorista);
  }