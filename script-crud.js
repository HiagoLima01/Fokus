const adicionarTarefaBtn = document.querySelector('.app__button--add-task')
const adicionarTarefaForm = document.querySelector('.app__form-add-task')

adicionarTarefaBtn.addEventListener('click', ()=>{
    formAdicionarTarefa.classList.toggle('hidden');
})