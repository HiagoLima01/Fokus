const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');

const iniciarBtn = document.getElementById('start-pause');

const tituloApp = document.querySelector('.app__title');

const imagem = document.querySelector('.app__image');

const timer = document.getElementById('timer');

const tempoFoco = 1500;
const tempoCurto = 300;
const tempoLongo = 900;


function alterarContexto(contexto){
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

focoBtn.addEventListener('click', () =>{alterarContexto('foco')} )

curtoBtn.addEventListener('click', () =>{alterarContexto('descanso-curto')})

longoBtn.addEventListener('click', () =>{alterarContexto('descanso-longo')})