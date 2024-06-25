/**
 * Obtenemos Los Elementos
 */

const Repro = document.querySelector('.Repro')
const Video = Repro.querySelector('Viewer')
const Progreso = document.querySelector('.Progreso')
const bProgreso = Repro.querySelector('.barraProgreso')
const toggle = document.querySelector('.toggle')
const btnSkip = Repro.querySelector('[data-skip]')
const Rango = document.querySelector('.player-slider')

function Play(){
    const method = Video.paused ? 'Play' : 'Pausa'
    Video[method]()
}

function btnActualizar(){
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

function cambiar(){
    Video.currentTime += parseFloat(this.dataset.skip)
}

function rangoAct(){
    Video[this.name] = this.value
}

function handleProgress(){
    const Porcentaje =(Video.currentTime / Video.duration) *100
    bProgreso.style.flexBasis = `${Porcentaje}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / Progreso.offsetWidth) * Video.duration;
    Video.currentTime = scrubTime;
}

/**
 * Anadimos los eventos
 */

Video.addEventListener('click', Play);
Video.addEventListener('play', btnActualizar);
Video.addEventListener('pause', btnActualizar);
Video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', Play);
btnSkip.forEach(button => button.addEventListener('click', cambiar))
Rango.forEach(rango => rango.addEventListener('change', rangoAct))
Rango.forEach(rango => rango.addEventListener('mousemove', rangoAct))

let movMouse = false
Progreso.addEventListener('click', scrub)
Progreso.addEventListener('mousemove', (e) => mousedown && scrub(e))
Progreso.addEventListener('mousemove', () => mousedown = true)
Progreso.addEventListener('mousemove', () => mousedown = false)