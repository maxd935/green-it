import React from 'react';
import data from '../data/data.json';

function Data ()  {
    const DisplayData=data.map(
        (city)=>{
            return(
                <tr>
                    <td>{city.Ville}</td>
                    <td>{city.interfaceNum}</td>
                    <td>{city.accesInformation}</td>
                    <td>{city.competencesAdmin}</td>
                    <td>{city.usageInterfaceNum}</td>
                    <td>{city.scoreFragilite}</td>
                </tr>
            )
        }
    )
    return (
        <div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Ville</th>
                    <th>Accès aux interfaces numériques</th>
                    <th>Accès à l'information</th>
                    <th>Compétences administratives</th>
                    <th>Capacité d’usage des interfaces numériques</th>
                    <th>Score de fragilité</th>
                </tr>
                </thead>
                <tbody>


                {DisplayData}

                </tbody>
            </table>
        </div>
    );
};

export default Data;
