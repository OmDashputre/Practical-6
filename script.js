// Get elements
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const result = document.getElementById('result');

// Event handling using addEventListener
addBtn.addEventListener('click', function() {
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);

    // Validation
    if (isNaN(number1) || isNaN(number2)) {
        result.textContent = "Please enter valid numbers!";
        result.style.color = "red";
        return;
    }

    const sum = number1 + number2;
    result.textContent = `Result: ${sum}`;
    result.style.color = "green";
});
