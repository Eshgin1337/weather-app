document.addEventListener("DOMContentLoaded", function () {
    const arr = ['London', 'Prague', 'Madrid', 'Baku'];
    const select = document.getElementById('menu');
    const button = document.querySelector('button');
    const loader = document.getElementById('loader');
    const result = document.getElementById('result');

    arr.forEach(element => {
        const option = document.createElement('option');
        option.innerHTML = element;
        option.value = element;
        select.appendChild(option);
    });

    button.addEventListener('click', function (e) {
        e.preventDefault();
        const city = document.querySelector('#menu').value;
        
        // Show loader while fetching data
        loader.style.display = 'block';
        result.innerHTML = ''; // Clear previous result
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a653241c28ab86b5940f7b0e0375388f`)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                const temperature = (Number(data['main']['temp']) - 273.15).toFixed(2);
                result.innerHTML = `The temperature in ${city} is: ${temperature} °C`;
                result.classList.add('success');
            })
            .catch(function (err) {
                result.innerHTML = `Error: ${err.message}`;
                result.classList.add('error');
            })
            .finally(function () {
                // Hide loader when done
                loader.style.display = 'none';
            });
    });
});
