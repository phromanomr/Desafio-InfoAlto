import React from 'react'
import Modal from 'react-modal';
import { useState } from 'react';
import './Janela.css';

function Janela({adicionarTarefa, tarefas}) {

    let data = new Date();

function diaDaSemana(){
    switch(data.getDay() + 1){
        case 1:return "Domingo";
        case 2:return "Segunda-Feira";
        case 3:return "Terça-Feira";
        case 4:return "Quarta-Feira";
        case 5:return "Quinta-Feira";
        case 6:return "Sexta-Feira";
        case 7:return "Sábado";
        default:return "erro";
    }
}

function mes(){
    switch(data.getMonth() + 1){
        case 1:return "Janeiro";
        case 2:return "Fevereiro";
        case 3:return "Março";
        case 4:return "Abril";
        case 5:return "Maio";
        case 6:return "Junho";
        case 7:return "Julho";
        case 8:return "Agosto";
        case 9:return "Setembro";
        case 10:return "Outubro";
        case 11:return "Novembro";
        case 12:return "Dezembro";
        default:return "erro";
    }
}


    const [texto, setTexto] = useState();
    const [hora, setHora] = useState();
    const [id, setId] = useState(0);

    const criarTarefas = (texto, hora, check = false) => {
        const tarefaObj = {texto: texto, hora: hora, id: id, check: check};
        setId(id + 1);
        adicionarTarefa(tarefaObj);
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '1',
            background: 'linear-gradient(#CB8AF3, #FE86FB)',
            width: '350px',
            height: '350px',
            borderRadius: '25px',
        },
    };
    
return(
    <div className="container">

        <div className="dados">
            <span>{diaDaSemana()}, {data.getDate()} de {mes()}</span>
            <button className="botaoAdicionaElemento" onClick={openModal}>+</button>
        </div>

        <span className="numeroTarefas">{tarefas.length} Tarefas</span>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
            <div className="modal">
                <span style={{fontSize:20}}>Adicione uma Tarefa</span>

                <div className="inputs">
                    <span>Descrição da Tarefa</span>
                    <input type="text" onChange={(e) => setTexto(e.target.value)}></input>
                </div>
                <div className="inputs">
                    <span>Hora</span>
                    <input type="time" onChange={(e) => setHora(e.target.value)}></input>
                </div>
                
                <div className="buttons">
                    <button onClick={() => {criarTarefas(texto, hora, false);closeModal();setTexto("");setHora("- - : - -")}}>Enviar</button>
                    <button onClick={() => {closeModal();setTexto("");setHora("")}}>Fechar</button>
                </div>
            </div>
        </Modal>

    </div>
)

}


export default Janela
