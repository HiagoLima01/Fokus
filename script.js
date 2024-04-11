//Selecionando Elementos do HTML

const html = document.querySelector('html');

//Selecionando botões do modo do app
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button')

//Selecionando botões para play no timer e musica
const iniciarBtn = document.getElementById('start-pause');
const iniciarBtnTxt = document.querySelector('#start-pause span');
const playPause = document.getElementById('start-pause');

//Selecionando objetos para mudança de tela
const tituloApp = document.querySelector('.app__title');
const imagem = document.querySelector('.app__image');
const tempoNaTela = document.getElementById('timer');

//Selecionando botão para play na música
const musicaFocoInpt = document.getElementById('alternar-musica');

//Instânciando objetos da classe Audio para colocar música no site 
const musica = new Audio('sons/luna-rise-part-one.mp3');
const somInicio = new Audio('sons/play.wav')
const somPause = new Audio('sons/pause.mp3')
const somFim = new Audio('sons/beep.mp3')
musica.loop = true;

//Iniciando variaveis de tempo e de timer para os modos
let tempoDecorrido = 1500
let intervaloId = null


//Funções
function iniciarOuPausar(){
    /*
    Função para iniciar e pausar música

    Se o timer estiver tocando seu estado é true e o algoritimo irá entrar no if que ira pausar a música e mudar o texto do botão para 'começar' e zerar o timer
    
    Caso o timer não esteja tocando ela vai iniciar e junto vai definir um intervalo de tempo
    
    */
    if(intervaloId){
        somPause.play()
        iniciarBtn.textContent = "Começar"
        zerar()
        return
    }
    somInicio.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarBtn.textContent = "Pausar"
}

function mostrarTempo(){
    /*
    Função para mostrar na página o tempo corrido
    Cria um objeto Date para fazer a formatação da data de segundos para minutos
    */
    const tempo = new Date(tempoDecorrido * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br',{'minute':'2-digit', 'second': '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

function zerar() {
    /*
    Retira o timer e define a variavel dele para NULL
    */
    clearInterval(intervaloId) 
    intervaloId = null
}

const contagemRegressiva = () => {
    /*
    Função que vai tocar com o intervalo de tempo
    Entra na condicional se o tempo chegar a zero, quando entrar na condicional toca que o timer chegou ao fim e zera o timer
    Enquanto o Timer não chegou ao fim ele retira 1 a cada um segundo ele tira 1 no valor do tempo
    */

    if(tempoDecorrido <= 0){
        somFim.play()   
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorrido -= 1
    mostrarTempo()

}

function alterarContexto(contexto){
    /*
    Função que vai alterar o estado do programa dependendo da opção que o usuário selecionar
    Define o valor do atributo 'data-contexto' no html para o tipo do botão
    Muda a imagem da página

    Switch Case para alterar título do programa dependendo do botão clicado
    */
    mostrarTempo()
    botoes.forEach(function (contexto) {
        `
        Remove as decorações de selecionado de todos botões
        `
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

//Listeners 

playPause.addEventListener('click', iniciarOuPausar)

musicaFocoInpt.addEventListener('change', () => {
    if (musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})

focoBtn.addEventListener('click', () =>{
    tempoDecorrido = 1500
    alterarContexto('foco')
    focoBtn.classList.add('active')
} )

curtoBtn.addEventListener('click', () =>{
    tempoDecorrido = 300
    alterarContexto('descanso-curto')
    curtoBtn.classList.add('active')
})

longoBtn.addEventListener('click', () =>{
    tempoDecorrido = 900
    alterarContexto('descanso-longo')
    longoBtn.classList.add('active')
})

mostrarTempo()