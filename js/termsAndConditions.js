//fetching text to terms and conditions
const API_link = 'https://developers.google.com/terms/';
//console.log(termsAndConditions);//providing the link
const termsContent = document.getElementById("terms-content");


async function fetchData() {
  
  try {
    const response = await fetch(API_link);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
      
    }
    
    const data = await response.json();
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
    <!--<h3 class="terms-heading">Terms and Conditions</h3>
       <div id="terms-content"></div>
      </div>
    
    
    `;
    textContainer.insertAdjacentHTML('beforeend', dataTemplate);

  });
}
