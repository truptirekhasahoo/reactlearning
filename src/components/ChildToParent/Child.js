import React from 'react'
class Child extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"Trupti",
            city:"Bangalore"
        }
    }
    Childfn=() =>{
        this.props.getdata(this.state.name,this.state.city)
    }

    render(){
        return(
            <div>
                <h2>Child Component</h2>
                <button className="btn btn-primary px-3" onClick={this.Childfn}>GetData</button>
            </div>
        )
    }
}
export default Child