import React from 'react';

function Card  (data)  {
    return (
        <div style={{ height: '250px', width: '50%', border: '1px solid black',marginRight: '10px', float: 'left'}}>
            <h3>Ville : {data.data.Ville}</h3>
            <p>Accès aux interfaces numériques : {data.data.interfaceNum}</p>
            <p>Accès à l'information : {data.data.accesInformation}</p>
            <p>Compétences administratives : {data.data.competencesAdmin}</p>
            <p>Capacité d'usage des interfaces numériques : {data.data.usageInterfaceNum}</p>
            <p>Score de fragilité : {data.data.scoreFragilite}</p>
        </div>
    );
};

export default Card;
