const btnShow = document.getElementById('btnShow');
const showJoke = document.getElementById('showJoke');

btnShow.addEventListener('click', getJoke)

async function getJoke() {
  showJoke.classList.add('show');
  showJoke.textContent = 'Loading...';

  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {'Accept': 'application/json'}
  });
  const data = await res.json();
  showJoke.textContent = data.joke;
}