const ctxTemp = document.getElementById('temperature-chart').getContext('2d');
const ctxHumid = document.getElementById('humidity-chart').getContext('2d');

// Sample data for demonstration
const hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'];
const temperatures = [30, 29, 28, 27, 26, 25, 24]; // Sample temperature data
const humidity = [60, 62, 64, 66, 68, 70, 72]; // Sample humidity data

const temperatureChart = new Chart(ctxTemp, {
    type: 'line',
    data: {
        labels: hours,
        datasets: [{
            label: 'Temperature (°C)',
            data: temperatures,
            borderColor: 'rgba(255, 99, 132, 1)',
           backgroundColor: 'rgba(255, 0, 0, 0.2)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Hour'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                }
            }
        }
    }
});

const humidityChart = new Chart(ctxHumid, {
    type: 'line',
    data: {
        labels: hours,
        datasets: [{
            label: 'Humidity (%)',
            data: humidity,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(0, 255, 235, 0.2)',
           
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Hour'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Humidity (%)'
                }
            }
        }
    }
});