import React from 'react'
import Janela from './Janela'
import Lista from './Lista'
import { useState } from 'react';
import { useEffect } from 'react';

function App(){

    const checkStorage = localStorage.getItem('lista');

    const [tarefas, setTarefas] = useState(checkStorage ? JSON.parse(checkStorage) : []);

    useEffect(() => {localStorage.setItem('lista', JSON.stringify(tarefas))},[tarefas]);

    const deletarTarefa = (id) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    }

    const adicionarTarefa = (tarefa) => {
        setTarefas([...tarefas, tarefa]);
    }

    const mudaTarefa = (id, check) => {
        var tarefaAlterada = [...tarefas];

        for(var i in tarefaAlterada){
            if (tarefaAlterada[i].id == id){
                tarefaAlterada[i].check = check;
                if(tarefaAlterada[i].hora == ""){
                    tarefaAlterada[i].hora = "- - : - -";
                }
            }
        }

        setTarefas(tarefaAlterada);
    }

    return(
        <div className="content">
            <Janela adicionarTarefa={adicionarTarefa} tarefas={tarefas}></Janela>
            {tarefas.map((tarefa) => (
                <div key={tarefa.id} className="elemento">
                    <Lista tarefa={tarefa} deletarTarefa={deletarTarefa} mudaTarefa={mudaTarefa}/>
                </div>
            ))}
        </div>
    )

}

export default App