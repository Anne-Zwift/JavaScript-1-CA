const API_link = "https://v2.api.noroff.dev/rainy-days";
const display = document.querySelector("#display-data");
const input = document.querySelector("#input");//grab the element

//async function
const getData = async() => {
  //response
  const res = await fetch(API_link);//getting the endpoint url
  console.log(res);//response object 200/ok

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
    
  }

  const data = await res.json();//using json method to get the array data objects
  console.log('API Response:', data.data);
  return data;

}
//getData();//call function

//making a function and get the data and insert it to the DOM
const displaySearch = async () => {
  try {
  let query = input.value;//store the search results
  console.log("Query::", query);

  const data = await getData();
  console.log('API Response:', data.data);

let dataFilter = data.data.filter((data) => {
  if (query == "") {
    return data;
  } else if(data.baseColor && data.baseColor.toLowerCase().includes(query.toLowerCase())) {
    return data;
  }
});

  if (dataFilter.length === 0) {
    display.innerHTML = '<p>No products found</p>';//display message
  } else {
    let dataHtml = dataFilter.map((object) => {
      const { title, price, baseColor, sizes, image } = object;

    return `
  <div class="all-products">
    <div class="product">
      <div class="product-image">
        <img src="${image.url}" alt="">
        </div>
        <p class="product-name">${title}</p>
        <div class="detail">
          <p class="price">${price}</p>
          <p class="base-color">${baseColor}</p>
          <p class="sizes">${sizes}</p>
        </div>
      </div>
    </div>
    `;
  }).join("");//to fix the , between elements use .join("")
      //insert dat to DOM
      console.log('Filtered HTML:', dataHtml);
      display.innerHTML = dataHtml;    
}
  }catch (error) {
    console.error('Error:', error);
  }
}

input.addEventListener("input", () => {
  displaySearch();
});

displaySearch();//initial call to display all products
