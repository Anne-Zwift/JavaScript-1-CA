//fetching text to terms and conditions
const textContainer = document.querySelector(".text-container");
console.log(textContainer)


const API_link = 'https://jsonplaceholder.typicode.com/todos/1';
//console.log(termsAndConditions);//providing the link

async function fetchData() {
  
  try {
    const response = await fetch(API_link);

    if (response.ok) {
      console.log('Network response was ok');//network error
    }
    
    const data = await response.json();
    console.log(data);
    displayData([data]);//call displayData with fetched data wrapped in array
    

  } catch (error) {
    console.log(error);//any error
  }
  
}
fetchData();

function displayData(data) {
  textContainer.innerHTML = ""; //clear my existing content
  data.forEach((item) => {
    const dataTemplate = `
    
    <div id="text-container" class="text-container">
      <h3 class="terms-heading">Terms and Conditions</h3>
      <p class="paragraph1">${item.userId}</p>
      <p class="paragraph2">${item.title}</p>
      <p class="paragraph3">${item.id}</p>
      <button>Continue Shopping</button>
    </div>
    
    
    `;
    textContainer.insertAdjacentHTML('beforeend', dataTemplate);

  });
}
