//spinner
const spinner = document.querySelector("#loading");

//display data: set up HTML skeleton for displaying data
const singleProductsContainer = document.querySelector("#single-products-container");



//fetching the API single product link
const API_Single_Product = "https://v2.api.noroff.dev/rainy-days/b8b528fc-6c60-41f6-a5a9-9a8b27a9482a";


async function fetchDataSingleProduct() {

    try {
        
       //spinner - see if it works in 3G
        spinner.style.display = 'inline-block';
         //fetching the data
        //const productId = new URLSearchParams(window.location.search).get("id");//fetching the web browser id not in use
        const response = await fetch(API_Single_Product);//(specifics: I need to use id after rainy-days, I can then fetch every viewed jacket

        const data = await response.json();//convert it back to js and save it in to data


        if (!response.ok) {

        };

        //display data
        displayData(data.data);

        
        
        

    } catch (error) {

    }
}
fetchDataSingleProduct();

//create a function for a single product

function displayData(data) {
  
  singleProductsContainer.innerHTML = `
    
  <div class="single-products-container" id="single-products-container">
    <div id="loading"></div>
      <div class="product">
      <div class="product-image">
      <img src="${data.image.url}" alt="">
      </div>
      <p class="product-name">${data.title}</p>
      <div class="detail">
        <div><p class="description">${data.description}</p></div><br>
        <div><p class="price">${data.price}</p></div><br>
        <p class="sizes">${data.sizes.join(" ")}</p>
        <div><p class="gender">${data.gender}</p></div>
      </div>
    </div>
  </div>
   
        `;

    spinner.style.display = 'none';
   

}

