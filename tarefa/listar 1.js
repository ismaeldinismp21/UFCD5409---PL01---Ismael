// listar.js

var stockData = [];

function checkStockQuantity(stockItem) {
    var quantity = parseInt(stockItem.quantity);
    if (quantity < 2) {
        return '<span class="low-stock">' + quantity + '</span>';
    }
    return quantity;
}

function renderStockList(data) {
    var html = '';
    data.forEach(function (stockItem) {
        html += '<tr>';
        html += '<td>' + stockItem.id + '</td>';
        html += '<td>' + stockItem.name + '</td>';
        html += '<td>' + stockItem.brand + '</td>';
        html += '<td>' + stockItem.model + '</td>';
        html += '<td>$' + stockItem.price + '</td>';
        html += '<td>' + checkStockQuantity(stockItem) + '</td>';
        html += '<td>';
        html += '<button class="btn btn-sm btn-primary" onclick="redirectToEditPage(' + stockItem.id + ')">Editar</button>';
        html += '<button class="btn btn-sm btn-danger ml-2" onclick="deleteStockItem(' + stockItem.id + ')">Remover</button>'; // Botão para remover
        html += '</td>';
        html += '</tr>';
    });
    document.getElementById('stockList').innerHTML = html;
}

function redirectToEditPage(id) {
    window.location.href = 'editar.html?id=' + id;
}

function searchStock() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    var filteredData = stockData.filter(function (stockItem) {
        return stockItem.name.toLowerCase().includes(searchValue);
    });
    renderStockList(filteredData);
}

function sortStockByQuantity() {
    stockData.sort(function (a, b) {
        return a.quantity - b.quantity;
    });
    renderStockList(stockData);
}

function deleteStockItem(id) {
    var stockList = JSON.parse(localStorage.getItem('stock')) || [];
    var filteredList = stockList.filter(item => item.id !== id);
    localStorage.setItem('stock', JSON.stringify(filteredList));
    renderStockList(filteredList);
}

document.addEventListener("DOMContentLoaded", function () {
    var stockList = JSON.parse(localStorage.getItem('stock')) || [];
    stockData = stockList;
    renderStockList(stockList);
});

function checkLogin() {
    var username = getCookie("username");
    if (!username) {
        window.location.href = "login.html";
    }
}

// listar.js

document.getElementById("logoutButton").addEventListener("click", function(event) {
    event.preventDefault();
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "login.html";
  });
  
  // Restante do seu código JavaScript para a página listar.html...
  

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
