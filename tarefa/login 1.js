
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "Ismael" && password === "atec123") {
      var now = new Date();
      var expirationDate = new Date(now.getTime() + 8 * 60 * 60 * 1000);
      document.cookie = "username=" + username + "; expires=" + expirationDate.toUTCString() + "; path=/";
      window.location.href = "listar.html";
    } else {
      alert("Login falhou. Por favor, verifique o seu nome de utilizador e password.");
    }
  });



  
  