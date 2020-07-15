import React from 'react';
import styled from "styled-components";
import Chart from 'components/Chart';
import MuseumDetails from 'components/MuseumDetails'

const NuitDesMusees = (props) => {
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
    `
    const Title = styled.h2`
        color:#6b6ecf
    `
    
    return(
        <Wrapper>
            <Box boxStyle="50px">
                <Title>Nuit des musées 2018 (graphique)</Title>
                <Chart/>
            </Box>
            <Box>
                <Title>Nuit des musées 2018 (carte)</Title>
            </Box>
        </Wrapper>
    )
}

export default NuitDesMusees;