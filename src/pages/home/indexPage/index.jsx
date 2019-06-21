import React,{Component} from 'react'
import {connect} from 'react-redux'
import {INFO} from '../../../redux/actions/info'
import {USER_INFO} from '../../../fetch/infoMap'
const mapStateToProps=(state)=>{
     const info=state.info;
     return {
         pending:info.getIn([USER_INFO,'pending']),
         data:info.getIn([USER_INFO,'data']),
         err:info.getIn([USER_INFO,'err'])
     }
}//从redux获取数据绑定到props
const  mapDispatchToProps=(dispatch)=>{
    return {
         changeName(){
             dispatch({
                 type:INFO,
                 key:USER_INFO,
                 payload:{
                     params:{name:"hdj"}
                 }
             })
         }
    }
} //绑定action到props

@connect(mapStateToProps,mapDispatchToProps)
class HomeIndex extends Component{
     page(){
         const {pending,data,err}=this.props;
         if (pending){
             return <div>加载中...</div>
         }else if (err){
             return <div>网络错误</div>
         } else if (data) {
             return <div>{data.name}</div>
         }else {
             return <div>点按钮三</div>
         }
     }
     render() {
         const {changeName}=this.props;
         return <div>
             {this.page()}
             <button onClick={changeName}>发送action</button>
         </div>
     }
}

export default HomeIndex