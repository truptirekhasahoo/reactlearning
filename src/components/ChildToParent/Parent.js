import React from 'react'
import Child from './Child'

class Parent extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            city:""
        }
    }
    getData=(name,city) => {
        this.setState({
            name:name,
            city:city
        })
    }
    render(){
        return(
            <div>
                <h2>Parent Component</h2>
                <h2>Name:{this.state.name}</h2>
                <h2>city:{this.state.city}</h2>
                <Child getdata={this.getData}/>
            </div>
        )
    }
}
export default Parent