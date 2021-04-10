// Import list from HTML document
let item_list = ["Bread", "Chips", "Ham", "Lemonade", "Sweets"];

function get_item_list() {

}

function add_item() {
    let new_item = document.getElementById("new_item");
    if (new_item.value !== "") {
        item_list.push(new_item.value);
        console.log("Adding new_item = \"" + new_item.value + "\" to item_list");
        new_item.value = "";
    } else {
        alert("Error: empty string.");
        console.log("Error: empty string.");
    }
    display_item_list();
}

function clean_item_list() {
    item_list = [];
    console.log("Cleaning item_list");
    display_item_list();
}

function display_item_list() {
    let element = document.getElementById("item_list");
    let data = "";
    if (item_list.length > 0) {
        for (current_item in item_list) {
            data += "<li><span>" + item_list[current_item] + "</span><button type=\"submit\" id=\"remove_item\"><i class=\"gg-math-minus\"></i></button></li>";
        }
    } else {
        data = "<li><span>No article yet!</span><button type=\"submit\" id=\"remove_item\"><i class=\"gg-math-minus\"></i></button></li>";
    }
    return element.innerHTML = data;
}

display_item_list();