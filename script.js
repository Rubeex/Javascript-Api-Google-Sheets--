const SHEET_ID = "ID-Sheets";
const API_KEY = "--Key--";
const VIEW = "--Name of Sheets--";
const RANGE = "A2:E";
const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${VIEW}!${RANGE}?key=${API_KEY}`;
const DateToday = new Date().toLocaleDateString();

async function mostrarMenuHoy() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let contenido = document.getElementById("container");
    contenido.innerHTML = data.values.map(
      (valores) =>`
<div
  id="container-platos"
  class="flex flex-col my-2 sm:flex-col sm:justify-center w-full px-2 gap-3 sm:items-center"
>
  <div class="flex w-[100px] h-[150px] sm:flex-col sm:items-center w-full sm:w-[200px] sm:h-[150px]  justify-center items-center">
    <img src="${valores[4]}" class="object-contain w-full h-full" />
  </div>
  <div class="text-center mb-4 sm:text-center w-full sm:w-[300px]">
    <h4 class="font-semibold mb-2">${valores[0]}</h4>
    <p class="text-[10px] mb-2">${valores[1]}</p>
    <span class="font-semibold ">$${valores[2]}</span>
  </div>
</div>`
    ).join('');;
  } catch (error) {
    console.log("Error al obtener los datos: ", error);
  }
}

document.getElementById("Horario-menu").innerText = DateToday;
document
  .getElementById("mostrarMenuBtn")
  .addEventListener("click", mostrarMenuHoy);
