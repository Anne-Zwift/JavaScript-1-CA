//Check if jQuery is loaded
window.onload = function() {
  if (window.jQuery) {
      console.log("jQuery is loaded");
  }
  else {
      console.log("jQuery is not loaded");
  }
}


//h1 - heading
/*let rainydaysSlogan = [{
  headline: "Pushing the Comfort Zone",
  summary: "Plan your next adventure with RAINYDAYS"
}];*/

//console.log(rainydaysSlogan);

//class="container-align-text"
/*let containerAlignText = document.querySelector(".slogan");

for (var i = 0; i < rainydaysSlogan.length; i++) {
  var item = rainydaysSlogan[i];
  console.log(item.headline);
  console.log(item.summary);

  containerAlignText.innerHTML = containerAlignText.innerHTML + "<h1>" + "<h2>" + item.headline + "<br> " + item.summary + "</h1>" + "</h2>";

}*/

//Product list API
fetchData();

async function fetchData() {

  try {
    const response = await fetch(`https://v2.api.noroff.dev/rainy-days`);

    if (!response.ok) {
      throw new Error("could not fetch resource");
        
    } 
      const data = await response.json();
      console.log(data);

    
    
  } catch (error) {
    console.error(error);
    
  }
  
}










/*fetchData();

async function fetchData() {
  
  try {
      const jacketTitle = document.getElementById("jacketTitle").value;
      const response = await fetch(`https://v2.api.noroff.dev/rainy-days`);
      console.log(response);
      return;
  
  if (!response.ok) {
      throw new Error("Could not fetch the item");
          
  }

      const data = await response.json();
      console.log(data);
      const jacketImg = data.image;
      const imgElement = document.getElementById("jacketImg");

      imgElement.src = jacketImg;
      imgElement.style.display = "block";
  
  
  
  } catch (error) {
      console.log(error);
  }
  
}*/

/*async function getData(){
  const API_jacket_List_URL = "https://v2.api.noroff.dev/rainy-days";
  
  const response = await fetch(API_jacket_List_URL);
  console.log("This is my List of Jacket url:", response);
  console.log("This is my link to the List of jacket:", API_jacket_List_URL);
  localStorage.setItem("getData", JSON.stringify(response));


};
getData();*/







//getting the cta-button
const ctaButton = document.querySelectorAll(".cta-button");
console.log(ctaButton);

//getting the jackets
const jackets = document.querySelectorAll(".flex-container");
document.querySelectorAll("flex-container flex-container-div img-flex1");
console.log(jackets);

const flexContainer = document.getElementsByClassName("flex-container");
console.log(flexContainer);*/









/*const myJacket = {
  color: 'red',
  produced: 'Norway',

}

const { color, produced } = myJacket;
  
  console.log("My single Jacket Item:", myJacket.color);
  localStorage.setItem('myJacket', JSON.stringify(myJacket));*/





