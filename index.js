//fetching API Link: https://v2.api.noroff.dev/rainy-days
const productsContainer = document.querySelector(".all-products");
const spinner = document.querySelector("#loading");
//console.log(productsContainer);//checking if I have the products-container
const cartCount = document.querySelector("#cartCount");


const API_link = "https://v2.api.noroff.dev/rainy-days";

async function fetchData() {

    
    try {

        spinner.style.display = "inline-block";//spins while waiting for data, make internet slower to see(3G)
        //Fetching the data
        const response = await fetch(API_link);//fetching data and save it in a response

        if (!response.ok) {
            console.log("fetching problem");
        }

        console.log(response);//200 ok
        const data = await response.json();//convert it back to js and save it in to data
        
        //display data
        console.log(data);//array 12 products
        console.log(data.data);//fetching the image pic link in item 1
        displayData(data.data);
    
        //Add to cart functionality
        //select all Cart Buttons
        const addToCartBtns = document.querySelectorAll(".add-to-cart");
        //console.log(addToCartBtns);//shows the NodeList of 12 buttons
        //loop thru the btns
        addToCartBtns.forEach((btn) => {
           //console.log(btn);
            btn.addEventListener('click', (event) => {
                const productId = +event.target.dataset.id;
                const product = +data.find((product) => product.id == productId);
                console.log(product);

            });
        });

    } catch (error) {
        console.log(error);
    }
}
fetchData();

function displayData(data) {
    data.forEach((product) => {
        const productTemplate = `
    
    <div class="all-products">

  <div id="loading"></div>
  <div class="product">
  <div class="product-image">
    <img src="${product.image.url}" alt="">
  </div>
    <p class="product-name">${product.title}</p>
    <div class="detail">
      <p class="price">${product.price}</p>
     <a href="/product/index.html?id=${product.id}">View details</a>
    </div>
    <button data-id=${product.id} class="add-to-cart">Add to Cart</button>
</div>
</div>

        `;
    spinner.style.display = "none";
    productsContainer.insertAdjacentHTML('beforeend', productTemplate);
    });
}

/*const button = document.querySelector('#female-btn');

const items = [
    { name: 'female', gender: 'Female' },
    { name: 'male', gender: 'Male' },
];

function sortByGender() {
    items.sort((a, b) => a.gender.localeCompare(b.gender));
    console.log(a,b);
}

document.getElementsByClassName('female-btn').addEventListener('click', sortByGender);*/


//cta button 
/*const btnEl = document.querySelector('.female-btn');
    const clickHandler = () => {
    console.log(data.data[0].gender);
    }
    btnEl.addEventListener('click', clickHandler);*/




//trying out 
/*const processData = (data) => {
    console.log(processData);
    const genderData = {
        male: 0,
        female: 0,
    };

    data.forEach(item => {
        if (item.gender === 'male') {
            genderData.male++;
        }else if (item.gender === 'female') {
            genderData.female++;
        }

    });

    return genderData;
};*/




//testing what works below
/*const optionsOfJackets = ['title', 'price', 'description'];
optionsOfJackets.forEach(function(jacket) {
    console.log(jacket + '');
})


const jacketsData = ['id', 'title', 'description', 'gender', 'sizes', 'price'];//checking
console.log(jacketsData[4]);

const jacket1 = {
    description: 'Rainy Days Thunderbolt Jacket',
    price: 139.99,
    sizes: [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ]
};
console.log(jacket1.description, jacket1.price, jacket1.sizes[0]);*/
//not in use for CA

//function redJackets(jacket1, jacket2) {
    //const price = jacket1 + jacket2;
    //return price;
//}
//const result = redJackets(500, 8000);
//console.log(result);

//arrow function
//const calculatePrice = (jacket1, jacket2) => {
    //return jacket1 + jacket2;
//};
//const result = calculatePrice(500, 8000);
//console.log(result);

//one line
//const calculatePrice = (jacket1, jacket2) => jacket1 + jacket2;

//const result = calculatePrice(500, 8000);
//console.log(result);

//const price = 5000;
//const description = 'Your total cost is:' + " " + price + ",-.";
//console.log(description);

//if else
//const itemPrice = 20;
/*
if (itemPrice > 100) {
    console.log(true);
} else {
    console.log(false);
    
}
*/
//without else just a simple statement
//itemPrice > 1000 ? console.log(true) : console.log(false);


//call back function
//const optionsOfJackets = ['red', 'green', 'blue'];
/*
optionsOfJackets.forEach(function(jacketOption) {
    console.log('- options:' + ' ' + jacketOption);

});
*/
//old way
//for(let i = 0; i < 2; i ++) {
    //console.log('-option:' + optionsOfJackets[i]);
//}



//interacting with HTML and CSS (DOM manipulation)

//changing text color
//const textEl = document.querySelector(".jackets");
//console.log(textEl);

//manipulating the text
//textEl.textContent = 'New jackets arrival';
//use span tags
//textEl.innerHTML = '<span>Welcome!</span>';

//add something to the text
//const textEl = document.querySelector(".jackets");
//textEl.insertAdjacentHTML('beforeend', '<span><br>Let us have a look at new arrivals!</span>');

//eventlistener, addEventListener(''), what will you listen for?
//const textEl = document.querySelector(".jackets");
//textEl.addEventListener('click', function() {
    //textEl.insertAdjacentHTML("beforeend", "<span><br>Let us have a look at new arrivals!</span>");
//});

// manipulate the css
//const textEl = document.querySelector(".jackets");
//textEl.style.fontSize = '64px';
// manipulate the css from classList
//const textEl = document.querySelector(".jackets");
//textEl.classList.add('jacket--special');

