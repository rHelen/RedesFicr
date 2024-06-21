document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    
    if (username === 'admin' && password === 'admin') {
      // Login bem-sucedido
      document.getElementById('loginMessage').textContent = 'Login bem-sucedido!';
      document.getElementById('loginMessage').style.color = 'green';
      
    } else {
      
      document.getElementById('loginMessage').textContent = 'Usuário ou senha incorretos. Tente novamente.';
      document.getElementById('loginMessage').style.color = 'red';
    }
  });
  