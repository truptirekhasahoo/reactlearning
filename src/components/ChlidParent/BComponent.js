import React from 'react'

class BComponent extends React.Component{
    constructor(){
        super()

    }
    render() {
        return (
            <div>
                <h1>B Components</h1>
        <h4>Name:{this.props.n}</h4>
        <h4>city:{this.props.c}</h4>
                </div> 

        );
    }
}
export default BComponent