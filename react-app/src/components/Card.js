import React from 'react';

function Card  (data)  {
    return (
        <div>
            <div style={{ height: '260px', width: '100%', border: '1px solid black',margin: '0 auto', padding:'10px'}}>
                <h3>{data.data.LIBCOM}</h3>
                <p>Accès aux interfaces numériques : {data.data.INDICATEUR_INTERFACE_NUMERIQUES}</p>
                <p>Accès à l'information : {data.data.INDICATEUR_ACCES_INFORMATION}</p>
                <p>Compétences administratives : {data.data.INDICATEUR_COMPETENCES_ADMINISTRATIVES}</p>
                <p>Capacité d'usage des interfaces numériques : {data.data.INDICATEUR_INTERFACE_NUMERIQUES}</p>
                <p> <strong>Score de fragilité : {data.data.INDICE_FRAGILITE}</strong></p>
            </div>
            <div style={{ height: '80px', width: '100%', border: '1px solid black',margin: '0 auto', padding:'10px'}}>
                <p>Score de fragilité département : {data.data.INDICE_FRAGILITE_DEP}</p>
                <p>Score de fragilité région : {data.data.INDICE_FRAGILITE_REG}</p>
            </div>
        </div>

    );
}

export default Card;
