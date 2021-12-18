function converter() {
    var temp = document.getElementById('temp')
    var tempCelsius = document.getElementById('celsius').value
    var tempFahrenheit = (tempCelsius / 5) * 9 + 32
    temp.value = tempFahrenheit
}

function verifyTemp() {
    temp = document.getElementById('temp')
    if (temp.value > 90) {
        var comentary = document.getElementById('comentary')
        comentary.innerHTML = 'eita calor da mizera'
    } else {
        comentary.innerHTML = ''
    }
}