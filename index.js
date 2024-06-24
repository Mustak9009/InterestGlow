function handleCalculation(){
    const principal = document.getElementById('principal').value;
    const interest_rate = document.getElementById('interest_rate').value;
    const time = document.getElementById('time').value;
    const interest_element = document.getElementById('intrest');

    const decimal_interest = parseFloat(interest_rate) / 100;

    const interest = principal * decimal_interest * time; // I = P * R * T (Principal(P),Interest(I),Time(T))
    interest_element.innerHTML = interest;
}