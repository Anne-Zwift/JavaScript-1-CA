//Create a function to call your API endpoint:
/*async function fetchData() {
    try {
        const response = await
        fetch("https://static.noroff.dev/api/rainy-days/0-akra-jacket.jpg");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('There has been a problem with your fetch operation:', error);
    }
    
}
//https://static.noroff.dev/api/rainy-days/0-akra-jacket.jpg
//Call this function when needed*/

//document.getElementById("yourButtonId").addEventListener("click", fetchData);


//new case to resolve the issue?
/*function onGet(version) {
    const url = "https://static.noroff.dev/api/rainy-days/0-akra-jacket.jpg" + version + "/message";
    let headers = {}

    fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers,
    })
    .then((response) => {
        if  (!response.ok) {
            throw new Error(response.error)
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('messages').value = data.messages;
    })
    .catch(function(error) {
        document.getElementById('messages').value = error;
    });
}*/

//This function grabs the headertext and changes the color and text.
//the console.log checks out any errors
/*function changeHeaderOnDOMLoad() {
    let headerText = document.getElementById("slogan");
        console.log(headerText.outerHTML);
        headerText.style.color = "green";
        headerText.textContent = "I am the new new Header text";
    
}

changeHeaderOnDOMLoad();

function highlightByTagName() {
    var paragraphs = document.getElementsByTagName("p");
        console.log(paragraphs);

    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.toggle("highlight");
        paragraphs[i].classList.toggle("Highlight2");
       
    }

}

function highlightByClassName() {
    var specialTexts = document.getElementsByClassName("special-text");
        console.log(specialTexts);

    for (var i = 0; i < specialTexts.length; i++) {
        specialTexts[i].classList.toggle("highlight");
         
    }

}

function toggleClassOff() {
    var specialTexts = document.getElementsByClassName("special-text");
        console.log(specialTexts);

    for (var i = 0; i < specialTexts.length; i++) {
        specialTexts[i].classList.toggle("highlight");
    }

}

function highlightByQuerySelector() {
    document.querySelector(".content-section h1").classList.toggle("highlight");
}

function highlightByQuerySelectorAll() {
   var elements = document.querySelectorAll(".content-section p");
   elements.forEach(function (element) {
    element.classList.toggle("highlight");
   });
}*/
//'https://v2.api.noroff.dev/cat-facts';
//const API_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

function getData() {
const data = fetch(API_POSTS_URL).then((response) => {
    console.log(response);
    return response.json();
})
.then((response) => console.log(response))
.catch((error) => console.log('this is an error'))
.finally(() => console.log('Finished, do cleanups here'))
    return data;
}
 getData();

 //AsyncAwait

async function getDataAsyncAwait() {
    const response = await fetch(API_POSTS_URL);
    const json = await response.json();
    //return json;
    console.log(json);
}

getDataAsyncAwait();


function main() {
    setTimeout(() => {
        console.log('Timeout has triggered');
    }, 3000);
}


main();

const API_POSTS_URL = 'https://static.noroff.dev/api/rainy-days/0-akra-jacket.jpg';

async function getData() {
    const response = await fetch(API_POSTS_URL);
    const json = await response.json();
    console.log(json);
    
}
getData();