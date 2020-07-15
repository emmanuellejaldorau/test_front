import React, {useEffect} from 'react';
import axios from 'axios';

const MuseumDetails = (props) => {
    // const [data, setData] = useState(initialData);

    const fetchData = async () =>{
        const url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=liste-et-localisation-des-musees-de-france&q=&recordid=dfc11f5bcb55f0984706fccfdb7f3d46508df6df';
        let response = await axios(url)
        // setData(response.data.records);
        console.log("happening museum details",response);
    }

    useEffect(() => {
        fetchData()
    }, []);
    
    return(
        <div></div>
    )
}

export default MuseumDetails;