// Import list from HTML document
let item_list = ["Bread", "Chips", "Ham", "Lemonade", "Sweets"];

function get_item_list() {

}

function add_new_item() {
    let new_item = document.getElementById("new_item").value;
    if (new_item !== ""){
        item_list.push(new_item);
        console.log("Adding new_item = \"" + new_item + "\" to: item_list");
    } else {
        alert("Error: empty string.");
        console.log("Error: empty string.");
    }
    display_item_list()
}

function display_item_list() {
    let element = document.getElementById("item_list");
    let data = "";
    if (item_list.length > 0) {
        for (current_item in item_list) {
            data += "<li><span>" + item_list[current_item] + "</span><button type=\"submit\"><i class=\"gg-math-minus\"></i></button></li>"
        }
    }
    return element.innerHTML = data;
}

display_item_list();