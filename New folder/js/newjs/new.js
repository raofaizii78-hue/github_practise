``
`javascript
let students = JSON.parse(localStorage.getItem("students")) || [];

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let courseInput = document.querySelector("#course");
let saveBtn = document.querySelector("#saveBtn");
let dataList = document.querySelector("#dataList");

let editIndex = null;


// Show data
function showData() {
    dataList.innerHTML = "";

    students.forEach(function(student, index) {

        let div = document.createElement("div");
        div.className = "student";

        div.innerHTML = ` <
h3 > $ { student.name } < /h3> <
    p > Email: $ { student.email } < /p> <
    p > Course: $ { student.course } < /p>

<
button class = "update"
onclick = "editStudent(${index})" >
    Update <
    /button>

<
button class = "delete"
onclick = "deleteStudent(${index})" >
    Delete <
    /button>
`;

        dataList.appendChild(div);
    });
}


// Save / Update
saveBtn.addEventListener("click", function() {

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let course = courseInput.value.trim();

    if (name === "" || email === "" || course === "") {
        alert("Please enter all data.");
        return;
    }

    let student = {
        name: name,
        email: email,
        course: course
    };

    if (editIndex === null) {
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = null;
        saveBtn.innerText = "Save Data";
    }

    localStorage.setItem("students", JSON.stringify(students));

    clearForm();
    showData();
});


// Delete
function deleteStudent(index) {

    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    showData();
}


// Update
function editStudent(index) {

    nameInput.value = students[index].name;
    emailInput.value = students[index].email;
    courseInput.value = students[index].course;

    editIndex = index;

    saveBtn.innerText = "Update Data";
}


// Clear form
function clearForm() {

    nameInput.value = "";
    emailInput.value = "";
    courseInput.value = "";
}


// Show saved data when page loads
showData();
`
``