let display = document.querySelector("#display");


// Add number or operator to display
function appendValue(value) {
    display.value += value;
}


// Clear complete display
function clearDisplay() {
    display.value = "";
}


// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// Calculate result
function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        let expression = display.value;

        // Calculate percentage
        expression = expression.replace(
            /(\d+(\.\d+)?)%/g,
            "($1/100)"
        );

        let result = Function(
            "return " + expression
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        display.value = result;

    } catch (error) {

        display.value = "Error";

        setTimeout(function() {
            display.value = "";
        }, 1000);
    }
}


// Keyboard support
document.addEventListener("keydown", function(event) {

    let key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {
        appendValue(key);
    } else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }

});