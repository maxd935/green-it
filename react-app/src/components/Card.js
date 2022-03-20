import React from 'react';

function Card  (data)  {
    return (
            <div style={{ height: '300px', width: '100%', border: '1px solid black',margin: '0 auto', padding:'10px'}}>
                <h3>{data.data.LIBCOM} - {data.data.CODE_POSTALE}</h3>
                <h4><em> Region : {data.data.LIB_REG}</em></h4>
                <p>Accès aux interfaces numériques : {data.data.INDICATEUR_INTERFACE_NUMERIQUES}</p>
                <p>Accès à l'information : {data.data.INDICATEUR_ACCES_INFORMATION}</p>
                <p>Compétences administratives : {data.data.INDICATEUR_COMPETENCES_ADMINISTRATIVES}</p>
                <p>Capacité d'usage des interfaces numériques : {data.data.INDICATEUR_INTERFACE_NUMERIQUES}</p>
                <p> <strong>Score de fragilité : {data.data.INDICE_FRAGILITE}</strong></p>
            </div>

    );
}

export default Card;
