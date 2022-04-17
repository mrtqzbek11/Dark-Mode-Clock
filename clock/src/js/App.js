// from mert ozbek :)


let clock = () => {

    let clockText = document.querySelector('#clock');

    let _date = new Date();

    let _hour = _date.getHours();
    let _minute = _date.getMinutes();
    let _second = _date.getSeconds();

    clockText.innerHTML = `${_hour}:${(_minute < 10 ? '0' + _minute : _minute)}:${(_second < 10 ? '0' + _second : _second)}`;

    setInterval(clock, 1000);

}


// Toggle


let switchSlider = document.querySelector('.slider');

let fullBody = document.querySelector('.body');

let clockDiv = document.querySelector('.clock-div');

switchSlider.addEventListener('click', () => {

    fullBody.classList.toggle('adr');

    clockDiv.classList.toggle('arr');

})