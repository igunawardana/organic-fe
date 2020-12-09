import React from 'react';

const Ninjas = ({ ninjas }) => {
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 15 ?
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
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 15) {
    //         return (
    //             <div className="ninja" key={ninja.id} >
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age : {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //             </div >
    //         )
    //     } else {
    //         return null;
    //     }
    // })
    return (
        <div className="ninja-list" >
            {
                ninjas.map(ninja => {
                    return ninja.age > 15 ?
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