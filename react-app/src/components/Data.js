import React  from 'react';
import data from '../data/data.json';
import Card from '../components/Card'

function Data ()  {

        return (
            <div style={{width: '100%'}}>
                {
                    data.map(
                        (city,k)=>{
                            return <Card key={k} data={city}/>
                        }
                    )
                }
            </div>
        );

};

export default Data;
