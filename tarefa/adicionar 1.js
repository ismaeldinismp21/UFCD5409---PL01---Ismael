

function addStockItem() {
    var name = document.getElementById('name').value;
    var brand = document.getElementById('brand').value;
    var model = document.getElementById('model').value;
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('quantity').value;
    var stockList = JSON.parse(localStorage.getItem('stock')) || [];
    var id = stockList.length + 1;
    var newItem = {
        id: id,
        name: name,
        brand: brand,
        model: model,
        price: price,
        quantity: quantity
    };
    stockList.push(newItem);
    localStorage.setItem('stock', JSON.stringify(stockList));
    alert("Eletrodoméstico adicionado com sucesso!");
    window.location.href = 'listar.html';
}

function checkLogin() {
    var username = getCookie("username");
    if (!username) {
        window.location.href = "login.html";
    }
}

function getCookie(name) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}

checkLogin();
