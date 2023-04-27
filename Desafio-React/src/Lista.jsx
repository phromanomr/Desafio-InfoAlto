import React from 'react';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import ListItemText from '@mui/material/ListItemText';
import './Lista.css';

function Lista({tarefa, deletarTarefa, mudaTarefa}) {

    return (
            <div className="lista">
                
                    <Checkbox onClick={() => tarefa.check == false ? mudaTarefa(tarefa.id, true) : mudaTarefa(tarefa.id, false)} sx={{color: pink[400],'&.Mui-checked': {color: pink[700],},}} checked={tarefa.check}/>
                    <ListItemText primary={tarefa.texto} />
                

                <div>
                    <ListItemText primary={tarefa.hora} />

                    <IconButton aria-label="delete" onClick={() => deletarTarefa(tarefa.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
    )
}

export default Lista
