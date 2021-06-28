import React from 'react'
import BComponent from './BComponent'

class AComponent extends React.Component{
    constructor(){
        super()
this.state={
    name:"Trupti",
    city:"bangalore"
}
    }
    render(){
        return <div>
            <h1>A Comentents</h1>
            <BComponent n={this.state.name} c={this.state.city}/>
   
        </div>
    }

}
export default AComponent