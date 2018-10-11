import React, { Component } from 'react';
import styles from './index.css'
class Hearder extends Component {
    constructor(props) {
        super(props)
  
    }
    state={
        isShowHead:false,
        startTop:0,
        status:false,
        contentTop:0,
        listTop:0,
        refreshing: false,
        down: true,
        height: document.documentElement.clientHeight,
    }
  

    componentDidMount(){
      
       
        
       
    }
   
    render() {
      
        return (
           <div className="header">
            你是我把爸爸
           </div>   
        )
    }
}

export default Hearder