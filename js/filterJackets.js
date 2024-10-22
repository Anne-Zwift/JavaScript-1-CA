const API_link = "https://v2.api.noroff.dev/rainy-days";
const display = document.querySelector("#display-data");
const input = document.querySelector("#input");//grab the element

const getData = async() => {
  //response
  const res = await fetch(API_link);//getting the endpoint url


  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
    
  }

  const data = await res.json();//using json method to get the array data objects

  return data;

}
getData();

//making a function and get the data and insert it to the DOM
const displaySearch = async () => {
  try {
  let query = input.value.toLowerCase().trim();//store the search results


  const data = await getData();


let dataFilter = data.data.filter((data) => {
  if (!query) {
    return true;
  } else{
    const titleMatch = data.title && data.title.toLowerCase().includes(query);
    const baseColorMatch = data.baseColor && data.baseColor.toLowerCase().includes(query);
    const tagsMatch = data.tags && data.tags.some(tag => tag.toLowerCase().includes(query));
    const genderMatch = data.gender && new RegExp(`\\b${query}\\b`).test(data.gender.toLowerCase());
    
    return titleMatch || baseColorMatch || tagsMatch || genderMatch;
         
   
  }
  
});

  if (dataFilter.length === 0) {
    display.innerHTML = '<p class="message">No products found</p>';//display message
  } else {
    let dataHtml = dataFilter.map((object) => {
      const { title, price, baseColor, sizes, gender, image  } = object;

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
          <p class="sizes">${sizes.join(" ")}</p>
          <p class="gender">${gender}</p>
        </div>
      </div>
    </div>
    `;
  }).join("");//to fix the , between elements use .join("")
      //insert dat to DOM

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