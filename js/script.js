const list = ["Chips", "Ham", "Lemonade"];

function add_new_article() {
    let li = document.createElement("li");
    let new_article = document.getElementById("new_article").value;
    let text = document.createTextNode(new_article);
    li.appendChild(text);
    if (new_article === "") {
        alert("Error: empty string.");
    } else {
        document.getElementById("article_list").appendChild(li);
    }
    document.getElementById("new_article").value = "";
}

console.log(list);