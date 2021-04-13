let item_list = [];

function add_item() {
    let item = document.getElementById("new_item");
    if (item.value !== "") {
        item_list.push(item.value);
        console.log("Adding \"" + item.value + "\" at item_list[" + (item_list.length - 1) + "]");
        item.value = "";
    } else {
        alert("Error: empty string.");
        console.log("Error: empty string.");
    }
    display_item_list();
}

function remove_item(item) {
    console.log("Removing \"" + item_list[item] + "\" from item_list[" + item + "]");
    item_list.splice(item, 1);
    display_item_list();
}

function clean_item_list() {
    item_list = [];
    console.log("Cleaning item_list");
    display_item_list();
}

function item_number() {
    let item_number = item_list.length;
    document.getElementById("item_number").innerHTML = String(item_number);
}

function display_item_list() {
    item_number();
    let element = document.getElementById("item_list");
    let li = "";
    if (item_list.length > 0) {
        for (item in item_list) {
            li += "<li><span>" + item_list[item] + "</span><button type=\"submit\" onclick=\"remove_item(" + item + ")\"><i class=\"gg-math-minus\"></i></button></li>";
        }
    } else {
        li = "<li><span>No article yet!</span></li>";
    }
    console.log("Displaying item_list = " + item_list);
    return element.innerHTML = li;
}

display_item_list();