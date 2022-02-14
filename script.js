let tarefas = [];
let i = 0;

function adicionar() {
    let item = document.getElementById("adiciona").value; //pegando valor do input
    let itensLi = document.getElementById("itensAfazer");      //chamando minha li do TODO
    tarefas.push(item);
    itensLi.innerHTML += `
    <li>
          <input type="checkbox" onclick="descolar(this.id)" id="${[i]}">${item}
           <button id="botaoEditar" onclick="editar ('${tarefas[i]}') ">editar</button>
           <button id="botaoExcluir" onclick="excluir ('${tarefas[i]}')">excluir</button>
    </li>
    
    `;
    i++
    ;
    document.getElementById("adiciona").value = ""
}

function excluir(valorIndice) {
    let numItem = tarefas.indexOf(valorIndice);
    tarefas.splice(numItem, 1);
    let h = 0;
    let itensLi = document.getElementById("itensAfazer")
    itensLi.innerHTML = "";
    while (h < tarefas.length) {
        itensLi.innerHTML += `
    <li> 
        <input type="checkbox" onclick="descolar(this.id)" id="${[h]}"> ${tarefas[h]}
        <button onclick="editar ('${tarefas[h]}') " >editar</button>
        <button onclick="excluir ('${tarefas[h]}')" >excluir</button>
    </li>
    `;
    h++;

  }

}

function editar(valorIndice) {
    let numItem = tarefas.indexOf(valorIndice);
    ind = numItem;
    botaoSalvar.style.display = "inline-block";
    botaoCancelar.style.display = "inline-block";
    botaoAdicionar.style.display = "none";
    document.getElementById("adiciona").value = valorIndice
}

function salvar() {
    let j = 0;
    let novaTarefa = document.getElementById("adiciona").value;
    let itensLi = document.getElementById("itensAfazer");
    botaoSalvar.style.display = "none";
    botaoCancelar.style.display = "none";
    botaoAdicionar.style.display = "inline-block";
    tarefas.splice(ind, 1, novaTarefa);
    itensLi.innerHTML = "";
    while (j < tarefas.length) {
    itensLi.innerHTML += `   
    <li class="coluna">
        <input type="checkbox" onclick="descolar(this.id)" id="${[j]}">${tarefas[j]}
        <button onclick=" salvar('${tarefas[j]}')"> editar</button>
        <button onclick="excluir('${tarefas[j]}')">excluir</button>
    </li>
`;
j++
 }
 document.getElementById("adiciona").value=""
}

function cancelar(){
    botaoSalvar.style.display = "none";
    botaoCancelar.style.display = "none";
    botaoAdicionar.style.display = "inline-block";
    document.getElementById("adiciona").value=""
}

let tarefasFeitas=[];

function descolar(id){
    let l =0
    let task = document.getElementById(id);
    let completedList = document.getElementById("itensFeitos");
    let todoList = document.getElementById("itensAfazer");
    // let testei = document.getElementById("teste");

    

    if(task.checked) {
      completedList.appendChild(task.parentElement)
    //   tarefasFeitas.push(casa)
    //   completedList.innerHTML += `
    //   <li>
    //         <input type="checkbox" onclick="descolar(this.id)" id="${[l]}">${tarefasFeitas}
    //          <button id="botaoEditar" onclick="editar ('${tarefasFeitas[l]}') ">editar</button>
    //          <button id="botaoExcluir" onclick="excluir ('${tarefasFeitas[l]}')">excluir</button>
    //   </li>
      
    //   `;
    //   l++
    
  } else {
      todoList.appendChild(task.parentElement)
   
  }
}



//   botaoEditar.style.display = "none"
    //   botaoExcluir.style.display = "none"

 //   botaoEditar.style.display = "inline-block"
    //   botaoExcluir.style.display = "inline-block"
















// function moveTasks(id)
// {
// 	let task = document.getElementById(id);
//   let completedList = document.getElementById("completed-list");
//   let todoList = document.getElementById("todo-list");
  
//   if(task.checked) {
//     completedList.appendChild(task.parentElement)
// } else {
//     todoList.appendChild(task.parentElement)
// }
 
  
// }




