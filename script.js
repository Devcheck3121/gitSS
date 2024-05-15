let products = [
    {
        id : 0,
        img : "https://cdn.defenseone.com/media/img/cd/2021/01/26/Screen_Shot_2021-01-26_at_3.19.32_PM/860x394.png",
        title : "battery 01",
        category : "mobile",
        price : 20,
    },
    {
        id : 1,
        img : "https://cdn.defenseone.com/media/img/cd/2021/01/26/Screen_Shot_2021-01-26_at_3.19.32_PM/860x394.png",
        title : "battery 02",
        category : "mobile",
        price : 20,
    },
    {
        id : 4,
        img : "https://cdn.defenseone.com/media/img/cd/2021/01/26/Screen_Shot_2021-01-26_at_3.19.32_PM/860x394.png",
        title : "battery samsung",
        category : "mobile nokia",
        price : 20,
    }
]
let divId = document.getElementById('checkD');
products.forEach((items)=>{
    divId.innerHTML += ` <div class="product">
    <img src="${items.img}" alt="" height="100px" width="100px">
    <h2 class="product-name">${items.title}</h2>
    <p class="product-category"${items.category}</p>
    <p class="product-price">${items.price}</p>
    <button class="add-to-cart-button" onclick="addToCart(${items.id})">Add to Cart</button>
</div>`
})
let cartData = [];
let priceData = 0;
let cartPanel = document.getElementById("cart-items");
let priceHtml = document.getElementById('total-price');
function addToCart(id) {
    if (!cartData.includes(id)){
        cartData.push(id);
        cartPanel.innerHTML = "";
        priceData = 0;
        cartData.forEach((item)=>{
            cartPanel.innerHTML += ` <div class="product">
            <img src="${products[item].img}" alt="" height="100px" width="100px">
            <h2 class="product-name">${products[item].title}</h2>
            <p class="product-category"${products[item].category}</p>
            <p class="product-price">${products[item].price}</p>
        </div>`
        priceData += products[item].price
            priceHtml.innerHTML = priceData;
        })
    }
}