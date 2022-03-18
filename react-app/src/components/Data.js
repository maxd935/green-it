import React from 'react';
import Card from '../components/Card'

function Data ({datas})  {
    console.log("datas ", datas)
        return (
            <div style={{marginTop: '20px'}}>
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

}

export default Data;
