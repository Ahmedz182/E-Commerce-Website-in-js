import demoData from "../assets/demoData.js";
let shopProduct = document.querySelector(".shopProduct")

let length = demoData.length
console.log(length);
demoData.slice(length - 8, length).map(({ title, price, img, category }) => {
    let productContainer = document.createElement("div")
    productContainer.classList.add("productContainer")
    shopProduct.prepend(productContainer)

    productContainer.innerHTML = `
<div class="productCard">
<img
  class="productImg"
  src=${img}
  alt="product" />
</div>
<div class="productDetail">
<span class="productPrice">Category : <strong>${category}</strong></span>
<span class="productTitle">${title}</span>
<span class="productPrice">Rs. <strong>${price}</strong></span>
<button type="button"  class="cartBtn">Add to Cart</button>

</div>
`
    let cartBtn = document.querySelector(".cartBtn")
    cartBtn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartProducts = {
            title: title,
            price: price,
            img: img
        };

        cart.push(cartProducts);
        alert(title + " Added to Cart")
        localStorage.setItem("cart", JSON.stringify(cart));

        ;

    })

})

