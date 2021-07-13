import React, {component} from 'react'
import mystore from '../../Store/store';
import {connect} from 'react-redux'
j
class post extends component{

    componentDidMount(){
        this.setState({
            posts:this.props.post
        })
    }
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    render(){
        console.log(this.state.posts)
        return(
            <div>
                <h3>Post Data</h3>
            </div>
        )
    }
}
const mapStateToProps=(storeData)=>{
    return{
        post:storeData.myReducer.post
    }
}
export default connect(mapStateToProps,null)(post)