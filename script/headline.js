export let headlines = function() {
    let modal = document.getElementById("myModal");
    let header = modal.getElementsByClassName("modal-header")[0];
    header.getElementsByTagName("h2")[0].innerHTML = "Top Headlines"
    let body = modal.getElementsByClassName("modal-body")[0];
    let h5 = document.createElement("h5");
    let grayText = document.createElement("span");
    grayText.setAttribute("class", "grayText");
    grayText.appendChild(document.createTextNode("Posted on "));
    h5.appendChild(grayText);
    let published = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    h5.appendChild(document.createTextNode(published.getDate() + " " + months[published.getMonth()] + ", " + published.getFullYear()));
    body.getElementsByTagName("p")[0].innerHTML = "";
    body.getElementsByTagName("p")[0].appendChild(h5);
    let ul = document.createElement("ul");
    body.getElementsByTagName("p")[1].innerHTML = "";

    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=38bdf22d077e45dcbdd9bbf51d0cf880`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            let articles = myJson.articles;
            articles.forEach(element => {
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(element.title));
                ul.appendChild(li);
            });
        })
    body.getElementsByTagName("p")[1].appendChild(ul);
    modal.style.display = "block";
}