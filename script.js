function addProduct() {

    let product =
        document.getElementById("productName").value;

    let quantity =
        document.getElementById("quantity").value;

    if(product === "" || quantity === "") {
        alert("Enter all fields");
        return;
    }

    let table =
        document.getElementById("inventoryList");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = product;
    row.insertCell(1).innerHTML = quantity;

    document.getElementById("productName").value = "";
    document.getElementById("quantity").value = "";
}