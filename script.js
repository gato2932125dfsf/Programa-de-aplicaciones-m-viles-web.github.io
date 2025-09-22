// Crear dinámicamente las semanas
const container = document.getElementById('contenedor-semanas');

for (let i = 1; i <= 16; i++) {
  const semanaDiv = document.createElement('div');
  semanaDiv.classList.add('semana');
  semanaDiv.innerHTML = `
    <h3>Semana ${i}</h3>
    <p><a href="archivos/semana${i}.zip" download>Descargar Archivos Semana ${i}</a></p>
  `;
  container.appendChild(semanaDiv);
}
