var form = document.querySelector('form');
var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 
form.onsubmit = function(e) {
  if (!user.value||!pass.value) {
    e.preventDefault();
    alert('Completá ambos datos!')
  }
  else if(user.value&&!mail.test(user.value)){
    e.preventDefault();
    alert('Usuario inválido! (formato de usuario nombre@dominio.com)')
  }
}