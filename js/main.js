const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');

setInterval(setClock, 1000);

function setClock() {
  const currentTime = new Date();
  hour.textContent = currentTime.getHours();
  minute.textContent = currentTime.getMinutes();
}
setClock();