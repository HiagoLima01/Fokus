const adicionarTarefaBtn = document.querySelector('.app__button--add-task');
const adicionarTarefaForm = document.querySelector('.app__form-add-task');
const areaDeTexto = document.querySelector('.app__form-textarea');

adicionarTarefaBtn.addEventListener('click', ()=>{
    adicionarTarefaForm.classList.toggle('hidden');
})
adicionarTarefaForm.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const texto = areaDeTexto.value
})