import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MuseumDetails = (props) => {
    const initialData = {
        nom_du_musee:"", 
        adr:"", 
        ville:"", 
        region:"", 
        departement:"", 
        telephone1:"",
        sitweb:""
    }
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

    const Title = styled.h1`
        color: #2e2e7a;
        margin-left: 20px;
        margin-right: 20px;
    `

    const Box = styled.div`
        background-color: white;
        border-radius: 10px;
        min-height: 80vh;
        margin: 0 20px;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    const StyledLine = styled.div`
        display:flex;
        width: 80%;
    `
    const Block = styled.div`
        width: 25%;
    `
    return(
        <div>
            <Title>{data.nom_du_musee}</Title>
            <Box>
                <StyledLine>
                    <Block>
                        <h3>Adresse</h3>
                        <p>{data.adr}</p>
                    </Block>
                    <Block>
                        <h3>Ville</h3>
                        <p>{data.ville}</p>
                    </Block>
                    <Block>
                        <h3>Département</h3>
                        <p>{data.departement}</p>
                    </Block>
                    <Block>
                        <h3>Région</h3>
                        <p>{data.region}</p>
                    </Block>  
                </StyledLine>
                <StyledLine>
                    <Block>
                        <h3>Téléphone</h3>
                        <p>{data.telephone1}</p>
                    </Block>
                    <Block>
                        <h3>Site web</h3>
                        <p>{data.sitweb}</p>
                    </Block> 
                </StyledLine>
            </Box>
        </div>
    )
}

export default MuseumDetails;