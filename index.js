function deleteRow(e) {
    let deleteItem = e.target.parentElement.parentElement
    let deleteItem = e.target.parentElement.parentElement;
    console.log(deleteItem);
    deleteItem.remove()
    deleteItem.remove();
}

let removeButtons = document.querySelectorAll(".btn-remove");
console.log(removeButtons);
for (let i = 0; i < removeButtons.length; i++) {
    let eachButton = removeButtons[i]
    eachButton.onclick = deleteRow
    function wireUpRemoveButtons() {
        let removeButtons = document.querySelectorAll(".btn-remove");
        console.log(removeButtons);
        for (let i = 0; i < removeButtons.length; i++) {
            let eachButton = removeButtons[i];
            eachButton.onclick = deleteRow;
        }
    }
    wireUpRemoveButtons();

    document.querySelector('#create').onclick = createProduct
    document.querySelector("#create").onclick = createProduct;
    function createProduct() {
        let productName = document.querySelector('#broccoli').value
        let productPrice = document.querySelector('#raspberries').value
        console.log(productName, productPrice)
    }
    let productName = document.querySelector("#broccoli").value;
    let productPrice = document.querySelector("#raspberries").value;
    console.log(productName, productPrice);

    let element = `<tr class="product">
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`;

    element += document.querySelector("#tableBody").innerHTML;

    document.querySelector("#tableBody").innerHTML = element;

    document.querySelector("#broccoli").value = "";
    wireUpRemoveButtons();
}