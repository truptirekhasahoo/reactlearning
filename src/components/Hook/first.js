import React, {useState} from 'react';

const FirstHook = () =>{
    const[name,setName]=useState({
        name:"A2n",
        city:"Delhi"
    })
    const updateInfo=()=>{
        setName({
            name:"a2n academy",
            city:"bangalore"
        })
    }


        return (
            <div className="container mt-5">
                <h2>welcome to {name.name} from {name.city}</h2>
                <button className="btn mt-2 btn-primary px-3" onClick={updateInfo}>Update</button>
                
            </div>
        );
    }


export default FirstHook;