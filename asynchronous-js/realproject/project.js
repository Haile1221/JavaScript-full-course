let allCountries = [];

async function loadCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,languages,flags"
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const countries = await res.json();

    // Sort alphabetically
    allCountries = countries.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

    displayCountries(allCountries);
  } catch (error) {
    console.error("Failed to load countries:", error);
  }
}

function displayCountries(countries) {
  const tbody = document.querySelector("#countriesTable tbody");
  tbody.innerHTML = ""; //clear previous data

  countries.forEach((country) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
      </td>
      <td>${country.name.common}</td>
      <td>${country.capital?.[0] || "N/A"}</td>
      <td>${country.population.toLocaleString()}</td>
      <td>${
        country.languages ? Object.values(country.languages).join(", ") : "N/A"
      }</td>
    `;

    tbody.appendChild(row);
  }); //
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const filtered = allCountries.filter((c) =>
    c.name.common.toLowerCase().includes(searchTerm)
  );

  displayCountries(filtered);
});

loadCountries();
