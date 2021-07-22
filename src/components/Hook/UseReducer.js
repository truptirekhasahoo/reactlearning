import React, { Component, useReducer} from 'react';


const initval={
    no1:0,
    no2:10,
    no3:100,

}

const myReducer=(state,action)=>
{
    switch(action.type){
        case 'no1':
            state={
                ...state,
                no1:action.payload
            }
            break;
            case 'no2':
                state={
                    ...state,
                    no1:action.payload
                }
                break;
                case 'no3':
                    state={
                        ...state,
                        no1:action.payload
                    }
                    break;
    }
    return state;
}



export default function UseReducer() {
    const[state,dispatch]=useReducer(myReducer,initval)
    
        return (
            <div className="container">
                <div className="row">
        <h3>{state.no1}</h3>
                <button className="btn btn-primary mt-3" onClick={
                    ()=>{
                        dispatch({
                            type:"no1",
                            payload:state.no1+1
                        })
                    }
                }>No1</button>
                </div>
                <div className="row">
                <h3>No2</h3>
                <button className="btn btn-primary mt-3" onClick={
                    ()=>{
                        dispatch({
                            type:"no2",
                            payload:state.no2+1
                        })
                    }
                }>No2</button>
                </div>
                <div className="row">
                <h3>No3</h3>
                <button className="btn btn-primary mt-3" onClick={
                    ()=>{
                        dispatch({
                            type:"no3",
                            payload:state.no3+1
                        })
                    }
                }>No3</button>
                </div>
                
            </div>
        );
    }


