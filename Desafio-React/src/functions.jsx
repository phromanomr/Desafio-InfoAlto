let data = new Date();

function diaDaSemana(){
    switch(data.getDay()){
        case 1:return "Segunda-Feira";
        case 2:return "Terça-Feira";
        case 3:return "Quarta-Feira";
        case 4:return "Quinta-Feira";
        case 5:return "Sexta-Feira";
        case 6:return "Sábado";
        case 7:return "Domingo";
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

export default functions
