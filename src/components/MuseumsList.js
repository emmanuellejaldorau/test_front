import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from "react-router-dom";

const MuseumsList = (props) => {
    const Box = styled.div`
        border-radius: 10px;
        background: white;
        padding: 0 15px 10px;
        width:60%;
    `
    const Title = styled.h2`
        color:#6b6ecf
    `
    const StyledLine = styled.div`
        display:flex;
        border-bottom: 1px #acacac solid;
        padding: 10px 0;
        font-weight: ${props => props.lineStyle || "normal"};
        color: black;
    `

    const Cell = styled.div`
        width: 25%;
        padding: 0 5px;
        word-break: break-all;
    `
    const initialData = [{fields:{nom_du_musee:"", region:"", ville:"", telephonel:"", siteweb:""}}];
    const [data, setData] = useState(initialData);

    const fetchData = async () =>{
        const url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=liste-et-localisation-des-musees-de-france&q=&facet=region&facet=departement';
        let response = await axios(url)
        setData(response.data.records);
    }

    useEffect(() => {
        fetchData()
    }, []);
    
    return(
        <Box>
            <Title>Liste des Musées</Title>
            <StyledLine lineStyle="bold">
                <Cell>Nom du musée</Cell>
                <Cell>Ville</Cell>
                <Cell>Téléphone</Cell>  
                <Cell>Site web</Cell> 
            </StyledLine>
            {data.map(elt =>{
                return <Link to={`/museums/${elt.recordid}`} key={elt.recordid} style={{ textDecoration: 'none' }}>
                    <StyledLine>
                        <Cell>{elt.fields.nom_du_musee}</Cell>
                        <Cell>{elt.fields.ville}</Cell>
                        <Cell>{elt.fields.telephone1}</Cell>  
                        <Cell>{elt.fields.sitweb}</Cell>                   
                    </StyledLine>
                </Link>
            })}
        </Box>
    )
}

export default MuseumsList;