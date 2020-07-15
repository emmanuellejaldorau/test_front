import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import Chart from 'components/Chart';

const NuitDesMusees = (props) => {
    const [labels, setLabels]= useState([]);
    const [counts, setCounts] =useState([]);

    const fetchEvents = async () =>{
        const url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=nuit-des-musees-2018&q=&facet=region';
        let response = await axios(url);
        let events = response.data.facet_groups[0].facets;
        // const labels = 
        setLabels(events.map(elt => elt.name));
        setCounts(events.map(elt => elt.count))
        console.log("EVENTS", events); 
        
    }

    useEffect(() => {
        fetchEvents()
    }, []);

    const Wrapper = styled.div`
        display:flex;
        flex-direction: column;
        width: 35%;
    `

    const Box = styled.div`
        border-radius: 10px;
        background: white;
        padding: 0 15px 10px;
        margin-bottom: ${props => props.boxStyle || "0px"};
        width:100%;
        height: 50%;
    `
    const Title = styled.h2`
        color:#6b6ecf
    `
    
    return(
        <Wrapper>
            <Box boxStyle="50px">
                <Title>Nuit des musées 2018 (graphique)</Title>
                <Chart labels={labels} counts={counts}/>
            </Box>
            <Box>
                <Title>Nuit des musées 2018 (carte)</Title>
            </Box>
        </Wrapper>
    )
}

export default NuitDesMusees;