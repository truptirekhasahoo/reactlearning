import React, { Component } from 'react'

class Lifecyclemethod extends React.Component{
    componentDidMount(){
        console.log("componentDidmount is Triggered")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate is trigger")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate is trigger")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate is trigger")
    }
    componentWillUnmount(){
        alert("componentwillunmount is trigger")
    }

    constructor(props){
        super(props)
        this.state={
            count:1
        }
        console.log("constructor is Triggered")
    }
    static getDerivedStateFromProps(){
        console.log("getDeriverstate from props is Triggered")
    }
    // componentDidMount(){
    //     console.log("componentDidmount is Triggered")
    // }
    render(){
        console.log("render is triggered")
    
    return(
        <div>
        <h2>Life cycle Method</h2>
        <p>Loem200 </p>
        <p>Loem300  </p>
        <button onClick={() =>{this.setState({count:this.state.count+1})}}>UpddateMount</button>
        </div>
        
    )
    
    }
}
export default Lifecyclemethod