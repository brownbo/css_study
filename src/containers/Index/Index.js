import React, { Component } from 'react';
import { Carousel } from 'antd';
import styles from './index.css'
import PropTypes from 'prop-types';
import { routerRedux  } from 'dva/router';
import {connect} from 'dva';
const { push } = routerRedux;
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
      
       console.log(this.props)
        
       
    }

    gotoLogin=()=>{
        this.props.dispatch(push('/login'))
    }
   
    render() {
      
        return (
           <div className="page-index">
               
                <div className="banner main-wrap">
                    <div className=" banner-content">
                        <div className="index-head ">
                            <div className="logo">COPELL</div>
                            <ul className="func">
                                <li>企业注册</li>
                                <li onClick={this.gotoLogin}>企业登录</li>
                                <li>国际站</li>
                            </ul>
                        </div>

                        <div className="index-desc">
                            <h1>全球程序员</h1>
                            <h1>智能职荐平台</h1>
                            <p>Copell高配致力于为全球程序员在最短的时间内匹配到最合适的职位和项目?同时也为全球企业提供优质候选人</p>
                            <div className="posi-botton">查看在招职位</div>
                        </div>
                    </div>
                </div>
                
           </div>   
        )
    }
}

export default connect (({})=>({}))(Index)