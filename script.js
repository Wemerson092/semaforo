const img = document.querySelector('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0
let interval = null

const trafficLight = (event) => {     
    stopInterval()
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if(colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0
    }
}

const autoChange = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]();
    nextIndex(); 
}

const stopInterval = () => {
    clearInterval(interval)
}

const turnOff = () => {
    document.querySelector(img).src = 'img/desligado.png'
}

const turnOn = {
    'red': () => img.src = "img/vermelho.png",
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'auto': () => interval = setInterval(autoChange, 1000),
    'off': () =>  img.src = 'img/desligado.png'
}


buttons.addEventListener('click', trafficLight)
