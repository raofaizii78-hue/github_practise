let selectedIndex = null;

// Enter Key press hone par data add karne ke liye
document.getElementById('dataInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        if (selectedIndex === null) {
            addData();
        } else {
            updateData();
        }
    }
});

// 1. Data Add Karne Ka Function (Enter Button)
function addData() {
    const inputField = document.getElementById('dataInput');
    const value = inputField.value.trim();

    if (value === '') {
        showStatus('Pehle text box mein data type karein!');
        return;
    }

    const list = document.getElementById('dataList');
    const li = document.createElement('li');
    li.textContent = value;

    // List item par click hone ka event
    li.onclick = function() {
        selectItem(this);
    };

    list.appendChild(li);
    clearInput();
    showStatus('Data list mein add ho gaya.');
}

// List Item Select karne ka function
function selectItem(element) {
    const allItems = document.querySelectorAll('#dataList li');

    // Tamam items se highlight style hatayein
    allItems.forEach(item => item.classList.remove('selected'));

    // Selected item ko highlight karein
    element.classList.add('selected');

    // Selected item ki position/index save karein
    const listItems = Array.from(allItems);
    selectedIndex = listItems.indexOf(element);

    // Text ko input box mein layein
    document.getElementById('dataInput').value = element.textContent;

    showStatus('Data select ho gaya hai. Edit karke Update ya Delete dabaen.');
}

// 2. Data Update Karne Ka Function (Update Button)
function updateData() {
    if (selectedIndex === null) {
        showStatus('Pehle list se woh data click karein jise update karna hai!');
        return;
    }

    const inputField = document.getElementById('dataInput');
    const newValue = inputField.value.trim();

    if (newValue === '') {
        showStatus('Update karne ke liye text box mein kuch type karein!');
        return;
    }

    const listItems = document.querySelectorAll('#dataList li');
    listItems[selectedIndex].textContent = newValue;

    clearInput();
    showStatus('Data update ho gaya.');
}

// 3. Data Delete Karne Ka Function (Delete Button)
function deleteData() {
    if (selectedIndex === null) {
        showStatus('Pehle list se woh data click karein jise delete karna hai!');
        return;
    }

    const listItems = document.querySelectorAll('#dataList li');
    listItems[selectedIndex].remove();

    clearInput();
    showStatus('Data delete ho gaya.');
}

// Input field aur selection saaf karne ka function
function clearInput() {
    selectedIndex = null;
    document.getElementById('dataInput').value = '';

    const allItems = document.querySelectorAll('#dataList li');
    allItems.forEach(item => item.classList.remove('selected'));
}

function showStatus(msg) {
    document.getElementById('statusMsg').textContent = msg;
}