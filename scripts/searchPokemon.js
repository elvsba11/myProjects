const searchPokemon = document.getElementById('searchPokemon');
const btnSearch = document.getElementById('btnSearch');
const pokemonImg = document.getElementById('pokemonImg');
const showPokemon = document.getElementById('showPokemon');

btnSearch.addEventListener('click', getPokemon);

async function getPokemon() {
  try {
    if (!searchPokemon.value) {
      // if input empty hide img 
      pokemonImg.style.display = 'none';
      pokemonImg.classList.remove('active');
      showPokemon.textContent = 'Input pokemon name!';
      return;
    }

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon.value}`);
    const data = await res.json();

    pokemonImg.src = data.sprites.front_default;
    pokemonImg.style.display = 'block';
    pokemonImg.classList.add('active');
    showPokemon.textContent = `Name: ${data.name}\n\nBase Experience: ${data.base_experience}`;
    searchPokemon.value = '';

  } catch (error) {
    showPokemon.textContent = `Pokemon not found!`;
    pokemonImg.style.display = 'none'; // itago din kapag error
    pokemonImg.classList.remove('active');
    searchPokemon.value = '';
  }
}
