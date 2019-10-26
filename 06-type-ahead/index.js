const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

const promp = fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

const findMatches = function(wordToMatch, cities) {
  return cities.filter(value => {
    const regex = new RegExp(wordToMatch, "gi");
    return value.city.match(regex) || value.state.match(regex);
  });
};

function displayChnage() {
  const matchedArray = findMatches(this.value, cities);
  const html = matchedArray
    .map(place => {
      const highlatedName = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        highlatedName,
        ` <span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        highlatedName,
        ` <span class="hl2">${this.value}</span>`
      );
      return `<li>
        <span class ="name">
          ${cityName} , ${stateName}
        </span>
        <span class="population"> ${place.population}</span>
      </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}

const input = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

input.addEventListener("change", displayChnage);
input.addEventListener("keyup", displayChnage);
