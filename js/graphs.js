
const chart1 = document.getElementById('chartOne');

new Chart(chart1, {
type: 'bar',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
    label: 'Example 1',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1,
    backgroundColor: [
        '#c1d84e'
    ]
    }]
},
options: {
    indexAxis: 'y',
    scales: {
    x: {
        beginAtZero: true
    }
    }
}
});

const chart2 = document.getElementById('chartTwo');

new Chart(chart2, {
type: 'bar',
data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
    label: 'Example 2',
    data: [15, 7, 10],
    borderWidth: 1,
    backgroundColor: [
        '#c1d84e'
    ]
    }]
},
options: {
    indexAxis: 'y',
    scales: {
    x: {
        beginAtZero: true
    }
    }
}
});

const chart3 = document.getElementById('chartThree');

new Chart(chart3, {
type: 'bar',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
    label: 'Example 2',
    data: [16, 12, 1, 30, 5, 5],
    borderWidth: 1,
    backgroundColor: [
        '#c1d84e'
    ]
    }]
},
options: {
    indexAxis: 'y',
    scales: {
    x: {
        beginAtZero: true
    }
    }
}
});