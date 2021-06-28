import React from 'react'
import C from './C'
import myContext from './Context'
class B extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
       <h3>B component</h3>
       <C />
       </div>
        )
    }
}
export default B