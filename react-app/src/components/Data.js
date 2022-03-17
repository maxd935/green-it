import React, {useState,useEffect}  from 'react';
import Card from '../components/Card'

function Data ({datas})  {
    console.log("datas ", datas)
        return (
            <div style={{width: '100%'}}>
                {
                    datas.map(
                        (city,k)=>{
                            return <Card key={k} data={city}/>
                        }
                    )
                }
            </div>
        );

};

export default Data;
