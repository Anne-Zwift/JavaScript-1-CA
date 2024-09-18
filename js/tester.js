//Methods to fetch API

/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

.then(response => {

  if (!response.ok){
    throw new Error("could not fetch resource");
  }
  return response.json();//convert it to a readable format, json method
})
.then(data => console.log(data.name))
.catch(error => console.error(error) );*/



//async method

async function fetchData() {

  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("could not fetch resource");
        
    } 
      const data = await response.json();
      console.log(data);
      const pokemonSprite = data.sprites.front_shiny;
      const imgElement = document.getElementById("pokemonSprite");
      

      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
     //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    
    
  } catch (error) {
    console.error(error);
    
  }
  
}

fetchData();