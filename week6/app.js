const arr = ['London', 'Prague', 'Madrid', 'Baku'];
const select = document.getElementById('menu');
const button = document.querySelector('button');

arr.forEach(element => {
    const option = document.createElement('option');
    option.innerHTML = element;
    option.value = element;
    select.appendChild(option);
});


button.addEventListener('click', function (e) {
    e.preventDefault();
    const city = document.querySelector('#menu').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a653241c28ab86b5940f7b0e0375388f`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            document.getElementById('result').innerHTML = `The temperature is: ${(Number(data['main']['temp']) - 273.15).toFixed(2)} Cz`;
            // console.log(data);
        })
        .catch(function (err) {
            document.getElementById('result').innerHTML = err;
        });
        
});
