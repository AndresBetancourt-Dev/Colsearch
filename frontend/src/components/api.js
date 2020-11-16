export const mapboxAccessToken =
  "pk.eyJ1IjoiYW5kcmVzYmV0YW5jb3VydCIsImEiOiJja2V6eWxvbGQwZzh3MnlsYzZ0azBtM3huIn0.JybMBeDUjT8F9oGXG3OdFg";

export const openCageKey = "a84e92a0a4764a5e982e2ac79bd916f5";

export const mapboxStyles =
  "mapbox://styles/andresbetancourt/ckezzu9bg0efh19rx436mua8o";

const API_URL = "https://colsearch-backend.herokuapp.com/api/";

export async function getMissingPersons() {
  const response = await fetch(`${API_URL}missing`);
  const data = await response.json();
  return data;
}

export async function registerMissingPerson(information) {
  information.approved = false;
  information.found = false;
  await fetch(`${API_URL}missing`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(information),
  });
}

export const getCityAndCountry = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${openCageKey}`
  );
  const data = await response.json();
  const { country, city, town, state, neighbourhood, suburb } = await data
    .results[0].components;

  let locationInformation = {
    country,
    city,
    town,
    state,
    neighbourhood,
    suburb,
  };

  return locationInformation;
};
