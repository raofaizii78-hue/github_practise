``
`javascript
let selectedItem = null;


// Enter key
document.getElementById("dataInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        if (selectedItem === null) {
            addData();
        } else {
            updateData();
        }
    }
});


// Add Data
function addData() {

    let input = document.getElementById("dataInput");
    let value = input.value.trim();

    if (value === "") {
        showStatus("Please enter some data.");
        return;
    }

    let list = document.getElementById("dataList");

    let li = document.createElement("li");

    li.textContent = value;

    li.onclick = function() {
        selectItem(li);
    };

    list.appendChild(li);

    input.value = "";

    showStatus("Data added successfully.");
}


// Select Data
function selectItem(item) {

    let allItems = document.querySelectorAll("#dataList li");

    allItems.forEach(function(element) {
        element.classList.remove("selected");
    });

    item.classList.add("selected");

    selectedItem = item;

    document.getElementById("dataInput").value = item.textContent;

    showStatus("Data selected. Edit it and click Update.");
}


// Update Data
function updateData() {

    if (selectedItem === null) {
        showStatus("Please select data from the list first.");
        return;
    }

    let input = document.getElementById("dataInput");
    let value = input.value.trim();

    if (value === "") {
        showStatus("Please enter data to update.");
        return;
    }

    selectedItem.textContent = value;

    selectedItem.onclick = function() {
        selectItem(selectedItem);
    };

    selectedItem.classList.remove("selected");

    selectedItem = null;

    input.value = "";

    showStatus("Data updated successfully.");
}


// Delete Data
function deleteData() {

    if (selectedItem === null) {
        showStatus("Please select data from the list first.");
        return;
    }

    selectedItem.remove();

    selectedItem = null;

    document.getElementById("dataInput").value = "";

    showStatus("Data deleted successfully.");
}


// Status Message
function showStatus(message) {

    document.getElementById("statusMsg").textContent = message;
}
`
``