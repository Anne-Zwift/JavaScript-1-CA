//display data: set up HTML skeleton for displaying data
const productsContainer = document.querySelector(".products-container");
console.log(productsContainer);//checking if I have the products-container

//fetching the API single product link
const API_Single_Product = "https://v2.api.noroff.dev/rainy-days";



async function fetchData() {

    try {
        
        //fetching the data
        const response = await fetch(API_Single_Product);
        console.log(response);//status 200/ok
        const data = await response.json();//convert it back to js and save it in to data
        console.log(data);

        if (!response.ok) {
            console.log("something went wrong");
        };

        //display data
        displayData(data.data);
        
        

    } catch (error) {
        console.log(error);
    }
}
fetchData();

//create a function for a single product

function displayData(data) {
    data.forEach((product) => {
        const productTemplate = `
    
    <div class="products-container">
        <div class="product">
        <div class="product-image">
        <img src="${product.image.url}" alt="">
        </div>
        <p class="product-name">${product.title}</p>
        <div class="detail">
            <p class="price">${product.price}</p>
            <a href="#">View detail</a>
        </div>
    </div>
        `;
        
    productsContainer.insertAdjacentHTML('beforeend', productTemplate);
    });
}