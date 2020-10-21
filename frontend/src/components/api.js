export const mapboxAccessToken =
  "pk.eyJ1IjoiYW5kcmVzYmV0YW5jb3VydCIsImEiOiJja2V6eWxvbGQwZzh3MnlsYzZ0azBtM3huIn0.JybMBeDUjT8F9oGXG3OdFg";

export const mapboxStyles =
  "mapbox://styles/andresbetancourt/ckezzu9bg0efh19rx436mua8o";

const API_URL = "https://colsearch-backend.herokuapp.com/api/";

export async function getMissingPersons() {
  const response = await fetch(`${API_URL}missing`);
  const data = await response.json();
  return data;
}
