const button = document.querySelector(".button-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector('.list-task')

let minhalistadeItens = []



function adicionarNovaTarefa(){
    minhalistadeItens.push({
        tarefa: input.value,
        concluida: false
    })
      
    input.value = ""

    mostrarNatela()
   
}
function mostrarNatela(){

    let   novaLi = ""

    minhalistadeItens.forEach((item,posicao) => {
        novaLi =

        novaLi +  `
        <li class="task ${item.concluida && "done"}">
        <img  src="img/checked.png" alt="checked"onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
         <img src="img/trash.png" alt="tarefa para o lixo" onclick="deletarItem( ${posicao})">
    </li>
    `
    })

    listaCompleta.innerHTML= novaLi

    localStorage.setItem("lista",JSON.stringify(minhalistadeItens))

    }

    function concluirTarefa (posicao){
        minhalistadeItens[posicao].concluida =  !minhalistadeItens[posicao].concluida 
        mostrarNatela()
    }

    function deletarItem (posicao){
        minhalistadeItens.splice(posicao,1)
        mostrarNatela()
        
    }
    function recarregarTarefas(){
        const  tarefasDoLocalStorage = localStorage.getItem("lista")
        if (tarefasDoLocalStorage){
        
        minhalistadeItens = JSON.parse (tarefasDoLocalStorage)
        }
        mostrarNatela()
    }
  
    

 

recarregarTarefas()

button.addEventListener('click',adicionarNovaTarefa)