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
var rainydaysSlogan = [{
    headline: "Pushing the Comfort Zone",
    summary: "Plan your next adventure with RAINYDAYS"
}];

//console.log(rainydaysSlogan);

//class="container-align-text"
var containerAlignText = document.querySelector(".container-align-text");

for (var i = 0; i < rainydaysSlogan.length; i++) {

    var item = rainydaysSlogan[i];
    //console.log(item.headline);
    //console.log(item.summary);

    containerAlignText.innerHTML = containerAlignText.innerHTML + "<h1>" + "<h2>" + item.headline + " " + item.summary + "</h1>" + "</h2>";

}

