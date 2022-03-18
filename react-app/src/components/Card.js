import React from 'react';

function Card  (data)  {
    return (
        <div>
            <div style={{ height: '250px', width: '50%', border: '1px solid black',margin: '0 auto', padding:'10px'}}>
                <h3>{data.data.Ville}</h3>
                <p>Accès aux interfaces numériques : {data.data.interfaceNum}</p>
                <p>Accès à l'information : {data.data.accesInformation}</p>
                <p>Compétences administratives : {data.data.competencesAdmin}</p>
                <p>Capacité d'usage des interfaces numériques : {data.data.usageInterfaceNum}</p>
                <p> <strong>Score de fragilité : {data.data.scoreFragilite}</strong></p>
            </div>
            <div style={{ height: '75px', width: '50%', border: '1px solid black',margin: '0 auto', padding:'10px'}}>
                <p>Score de fragilité département : {data.data.scoreFragiliteDepartement}</p>
                <p>Score de fragilité région : {data.data.scoreFragiliteRegion}</p>
            </div>
        </div>

    );
}

export default Card;
