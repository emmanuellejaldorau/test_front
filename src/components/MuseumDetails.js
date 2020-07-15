import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MuseumDetails = (props) => {
    const initialData = {nom_du_musee:""}
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const fetchMuseumData = async () =>{
            const url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=liste-et-localisation-des-musees-de-france&q=&facet=region&facet=departement';
            let response = await axios(url);
            if (props.match){
                const { museumId } = props.match.params;
                const museum = response.data.records.find(elt => elt.recordid === museumId );
                console.log("Museum details", museum.fields);
                setData(museum.fields);
            }
        }
        fetchMuseumData()
    }, []);

    const Box = styled.div`
        background-color: white;
    `
    
    return(
        <Box>
            <h1>{data.nom_du_musee}</h1>
        </Box>
    )
}

export default MuseumDetails;