import React from 'react';

function CardRegion  (data)  {
    return (
            <div style={{ width: '100%', border: '1px solid black',margin: '0 auto', padding:'10px', fontSize:'30px',display: 'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}>
                <p>Score de fragilité département ({data.data.DEP}) : {data.data.INDICE_FRAGILITE_DEP}</p>
                <p>Score de fragilité région ({data.data.REG}) : {data.data.INDICE_FRAGILITE_REG}</p>
            </div>
    );
}

export default CardRegion;
