import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
import {bashName,RoutersProvider} from '../../router/util'
@bashName('home') //为router增加bashName
class Home extends Component{
    render() {
        return <div className="flex_box_col">
                <div className="content">
                   <RoutersProvider routers={this.props.routers}/>
                </div>
                <div className='tabs'>
                    <NavLink className='tab_bar' exact={true} to="/index" activeClassName='active'>
                        主页
                    </NavLink>
                    <NavLink className='tab_bar' to='/my' activeClassName='active'>
                        我的
                    </NavLink>
                </div>
            </div>
      }
}

export default Home;