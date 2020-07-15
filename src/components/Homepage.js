import React from 'react';
import styled from 'styled-components';
import MuseumsList from 'components/MuseumsList';
import NuitDesMusees from 'components/NuitDesMusees';

const Homepage = (props) => {
    const Box = styled.div`
        display: flex;
        justify-content: space-around;
    `
    
    return(
        <Box>
          <MuseumsList/>
          <NuitDesMusees />
        </Box>
    )
}

export default Homepage;