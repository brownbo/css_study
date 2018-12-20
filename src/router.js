import React from 'react';
import {Router, Route} from 'dva/router';


/**component**/
//App

import Index from './containers/Index/Index';
import App from './containers/app';
import Template from './containers/Template/Index';
import Login from './containers/Login/login';
/*404page*/
import Error from './containers/error';


const routerMenu = [
  {
    path:'/',
    breadcrumbName:'首页',
    component:Index,
   
  },
  {
    path:'/login',
    breadcrumbName:'登录',
    component:Login,
   
  },
  {
    path:'/jobs',
    breadcrumbName:'首页1',
    component:App,
    child:[{
        path:'/jobs/index',
        breadcrumbName:'首页',
        component:Template,
      },{
        path:'*',
        breadcrumbName:'',
        component:Error,
      }
    ]
  },
  
];
//生成路由
const createRounte = (router,history)=>{
  const getRoute = (item)=>{
    return item.map(obj=>{
      if(obj.child){
        return (<Route key={obj.breadcrumbName}  path={obj.path} breadcrumbName={obj.breadcrumbName} component={obj.component}>
          {getRoute(obj.child)}
        </Route>)
      }
      return <Route key={obj.breadcrumbName} path={obj.path} breadcrumbName={obj.breadcrumbName} component={obj.component}/>
    })
  }

  return (<Router history={history}>{getRoute(router)}</Router>);

}

const RouterConfig = ({history}) =>{return (createRounte(routerMenu,history))}
export default RouterConfig;
