let clr = "red";

let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
let s3 = document.querySelector("#s3");
let s4 = document.querySelector("#s4");

s1.addEventListener("mouseenter", function() {
    if (clr == "red") {
        s1.style.backgroundColor = "red";
        clr = "green";
    } else if (clr == "green") {
        s1.style.backgroundColor = "green";
        clr = "yellow";
    } else if (clr == "yellow") {
        s1.style.backgroundColor = "yellow";
        clr = "blue";
    } else if (clr == "blue") {
        s1.style.backgroundColor = "blue";
        clr = "red";
    }
    let r = Math.floor(Math.random() * 100);
    s1.innerHTML = r;
});

s1.addEventListener("mouseleave", function() {
    s1.style.backgroundColor = "white";
});


s2.addEventListener("mouseenter", function() {
    if (clr == "red") {
        s2.style.backgroundColor = "red";
        clr = "green";
    } else if (clr == "green") {
        s2.style.backgroundColor = "green";
        clr = "yellow";
    } else if (clr == "yellow") {
        s2.style.backgroundColor = "yellow";
        clr = "blue";
    } else if (clr == "blue") {
        s2.style.backgroundColor = "blue";
        clr = "red";
    }
    let r = Math.floor(Math.random() * 100);
    s2.innerHTML = r;
});

s2.addEventListener("mouseleave", function() {
    s2.style.backgroundColor = "white";
});


s3.addEventListener("mouseenter", function() {
    if (clr == "red") {
        s3.style.backgroundColor = "red";
        clr = "green";
    } else if (clr == "green") {
        s3.style.backgroundColor = "green";
    }

    clr = "green";

    let r = Math.floor(Math.random() * 100);
    s3.innerHTML = r;
});

s3.addEventListener("mouseleave", function() {
    s3.style.backgroundColor = "white";
});


s4.addEventListener("mouseenter", function() {
    if (clr == "red") {
        s4.style.backgroundColor = "red";
    } else {
        s4.style.backgroundColor = "green";
    }

    clr = "green";

    let r = Math.floor(Math.random() * 100);
    s4.innerHTML = r;
});

s4.addEventListener("mouseleave", function() {
    s4.style.backgroundColor = "white";
});