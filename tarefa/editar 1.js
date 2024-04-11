// editar.js

function loadStockDetails() {
    var urlParams = new URLSearchParams(window.location.search);//
    var id = parseInt(urlParams.get('id'));

    var stockList = JSON.parse(localStorage.getItem('stock')) || [];
    var selectedItem = stockList.find(item => item.id === id);
    document.getElementById('editId').value = selectedItem.id;
    document.getElementById('editName').value = selectedItem.name;
    document.getElementById('editBrand').value = selectedItem.brand;
    document.getElementById('editModel').value = selectedItem.model;
    document.getElementById('editPrice').value = selectedItem.price;
    document.getElementById('editQuantity').value = selectedItem.quantity;
}

function saveEditedStockItem() {
    var id = document.getElementById('editId').value;
    var newName = document.getElementById('editName').value;
    var newBrand = document.getElementById('editBrand').value;
    var newModel = document.getElementById('editModel').value;
    var newPrice = document.getElementById('editPrice').value;
    var newQuantity = document.getElementById('editQuantity').value;
    var stockList = JSON.parse(localStorage.getItem('stock')) || [];
    var editedItemIndex = stockList.findIndex(item => item.id == id);
    if (editedItemIndex !== -1) {
        stockList[editedItemIndex].name = newName;
        stockList[editedItemIndex].brand = newBrand;
        stockList[editedItemIndex].model = newModel;
        stockList[editedItemIndex].price = newPrice;
        stockList[editedItemIndex].quantity = newQuantity;
        localStorage.setItem('stock', JSON.stringify(stockList));
        alert("Eletrodoméstico editado com sucesso!");
        window.location.href = 'listar.html';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadStockDetails();

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
});
