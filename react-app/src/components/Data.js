import React from 'react';
import Card from '../components/Card'

function Data ({datas})  {
        if(Object.keys(datas).length > 0) {
            return (
                <>
                    <div style={{marginTop: '20px', width: '20%',marginLeft: '10px'}}>
                        <div className='first'>
                            <Card  data={datas.ville}/>
                        </div>
                    </div>
                    <h2>Résultat des villes voisines</h2>
                    <div style={{marginTop: '20px', width: '100%'}}>
                        
                            {
                                datas.dept.map(
                                    (city,k)=>{
                                        return <div className="others" style={{width: '20%', marginLeft: '20px', marginRight: '20px', marginTop: '20px', float: 'left'}}>
                                            <Card key={k} data={city}/>
                                        </div>
                                    }
                                )
                            }
                </div>

                </>

            );
        }else {
            return (
                <div></div>
            )
        }

}

export default Data;
