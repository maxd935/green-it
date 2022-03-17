import React, {useState,useEffect}  from 'react';
import Card from '../components/Card'

function Data ({datas})  {
    console.log("datas ", datas)
        return (
            <div>
                {/*
                <div className="region"
                     style={{width: '50%', border: '1px solid', margin: '10px'}}>
                    <h4>Region</h4>
                    <p>Score de fragilité : 57, 26 </p>
                </div>
                <div className="departement"
                     style={{width: '50%' , border: '1px solid', margin: '10px'}}>
                    <h4>Département</h4>
                    <p>Score de fragilité : 48,80</p>
                </div>
                */}
                <div className="others" style={{width: '100%'}}>
                    {
                        datas.map(
                            (city,k)=>{
                                return <Card key={k} data={city}/>
                            }
                        )
                    }
                </div>

            </div>

        );

};

export default Data;
