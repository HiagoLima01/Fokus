const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button')

const iniciarBtn = document.getElementById('start-pause');

const tituloApp = document.querySelector('.app__title');

const imagem = document.querySelector('.app__image');

const timer = document.getElementById('timer');

const musicaFocoInpt = document.getElementById('alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
const somInicio = new Audio('sons/play.wav')
const somPause = new Audio('sons/pause.mp3')
const somFim = new Audio('sons/beep.mp3')
musica.loop = true;

const playPause = document.getElementById('start-pause')

let tempoFoco = 1500;
let tempoCurto = 300;
let tempoLongo = 900;

function iniciarOuPausar(){
    if(intervaloId){
        somPause.play()
        zerar()
        return
    }
    somInicio.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId) 
    intervaloId = null
}


const contagemRegressiva = () => {
    if(tempoFoco <= 0){
        somFim.play()
        zerar()
        alert('Tempo finalizado!')
        return
    }
    tempoFoco -= 1
    console.log('Temporizador: ' + tempoFoco)

}


let intervaloId = null



playPause.addEventListener('click', iniciarOuPausar)

musicaFocoInpt.addEventListener('change', () => {
    if (musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})

function alterarContexto(contexto){
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto)
    imagem.setAttribute('src', `/imagens/${contexto}.png`)

    switch(contexto){
        case 'foco':
            tituloApp.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            tituloApp.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break; 
        case 'descanso-longo':
            tituloApp.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`
            break;
        default:
            break;   
    }
}


focoBtn.addEventListener('click', () =>{
    alterarContexto('foco')
    focoBtn.classList.add('active')
} )

curtoBtn.addEventListener('click', () =>{
    alterarContexto('descanso-curto')
    curtoBtn.classList.add('active')
})

longoBtn.addEventListener('click', () =>{
    alterarContexto('descanso-longo')
    longoBtn.classList.add('active')
})