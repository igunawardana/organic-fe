import React from 'react';

const Ninjas = ({ ninjas }) => {
    return (
        <div className="ninja-list" >
            {
                ninjas.map(ninja => {
                    return ninja.age > 2 ?
                        (
                            <div className="ninja" key={ninja.id} >
                                <div>Name: {ninja.name}</div>
                                <div>Age : {ninja.age}</div>
                                <div>Belt: {ninja.belt}</div>
                            </div >
                        )
                        :
                        null;
                })
            }
        </div>
    )
}

export default Ninjas;