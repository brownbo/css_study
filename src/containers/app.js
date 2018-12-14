import React, { Component } from 'react';
import {Layout,message,Icon} from 'antd';
const {Content} = Layout;
class Index extends Component {
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
           <Layout>
               <div>Layout</div>
               
               <Content>
                {this.props.children ?this.props.children:<div>hello monstar</div>}
               </Content>
           </Layout>
        )
    }
}


export default Index