//Create a function to call your API endpoint:
async function fetchData() {
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
//Call this function when needed

document.getElementById("yourButtonId").addEventListener("click", fetchData);


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

