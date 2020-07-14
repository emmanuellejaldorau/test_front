import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MuseumsList = (props) => {
    const initialData = [{fields:{nom_du_musee:"", region:"", ville:"", telephonel:"", siteweb:""}}];
    const [data, setData] = useState(initialData);

    const fetchData = async () =>{
        const url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=liste-et-localisation-des-musees-de-france&q=&facet=region&facet=departement';
        let response = await axios(url)
        setData(response.data.records);
        console.log("happening",response.data.records);
    }

    useEffect(() => {
        fetchData()
    }, []);
    
    return(
        <div>
            {data.map(elt =>{
                return <div>
                    <div>{elt.fields.nom_du_musee}</div>
                    <div>{elt.fields.ville}</div>
                    <div>{elt.fields.region}</div>
                    <div>{elt.fields.telephone1}</div>  
                    <div>{elt.fields.siteweb}</div>                   
                </div>
            })}
        </div>
    )
}

export default MuseumsList;