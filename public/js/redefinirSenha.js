function resetPass(){
    var email = document.getElementById('userInput').value;
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert('Email para redefinir senha enviado!') 
        window.location.replace('autenticacao.html')
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == 'auth/invalid-email') {
            alert('Email inválido!'); 
        }else if(errorCode == 'auth/user-not-found') {
            alert('Esse email de usuário não existe!');
        }
        console.log(error);
    });
}