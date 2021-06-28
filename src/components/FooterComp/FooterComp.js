import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Footercomp.css'
 
class FooterComp extends React.Component{
    constructor(){
        super()
        
    }
    render(){
        return(
            <div class="row myFooter">
            <div class="col-6">TThis is my footer</div>
            <div class="col-6">Complete</div>
          </div>
        )
    }
}
export default FooterComp