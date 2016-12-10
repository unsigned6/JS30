const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now  = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (((seconds / 60) * 360) + 90)%360;
    if (secondsDegrees === 0) {
        secondHand.style.transition = 'none';
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }
    secondHand.style.transition = '.1s';
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(secondsDegrees);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
