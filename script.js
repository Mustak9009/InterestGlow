function handleCalculation(){
    const principal_amount = document.getElementById('principal').value;
    const rate_of_interest = document.getElementById('interest_rate').value;
    const allowed_time = document.getElementById('time').value;
    const interest_container = document.getElementById('intrest');
    const total_amount_container = document.getElementById('total_amount')

    const percent_to_decimal = parseFloat(rate_of_interest) / 100;

    const interest = principal_amount * percent_to_decimal * allowed_time; // I = P * R * T (Principal(P),Interest of rate(R),Time(T))
    const total_amount = parseFloat(principal_amount) + parseFloat(interest);

    interest_container.innerHTML = (Math.round(interest * 100)/100).toFixed(2);
    total_amount_container.innerHTML = (Math.round(total_amount * 100)/100).toFixed(2);
}