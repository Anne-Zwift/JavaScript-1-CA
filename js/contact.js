document.forms.contact.addEventListener('submit', (event) => {
    //Prevent the form from refreshing
    event.preventDefault();

    //Get the form element
    const form = event.target;

    //Create a new FormData object
    const formData = new FormData(form);

    //Convert the FormData object to a JSON object
    const json = Object.fromEntries(formData.entries());

    //Log the JSON object to the console
    //alert(JSON.stringify(json, null, 2));
    alert(JSON.stringify('Thank you! Your message was successfully sent.'));
});

/*document.forms.contact.addEventListener('submit', (event) => {
    // Prevent the form from refreshing
    event.preventDefault();
  
    // Get the form element
    const form = event.target;
  
    // Create a new FormData object
    const formData = new FormData(form);
  
    // Convert the FormData object to a JSON object
    const json = Object.fromEntries(formData.entries());
  
    // Log the JSON object to the console
    alert(JSON.stringify(json, null, 2));
  });*/

  alert('checking your connection');
  