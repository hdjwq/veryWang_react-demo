import React,{Component} from 'react'
import {connect} from 'react-redux'
import {LIST,REFRESH} from '../../../redux/actions/list'
import {PRODUCT_LIST} from '../../../fetch/listMap'
const mapStateToProps=(state)=>{
    const list=state.list;
    return {
        pending:list.getIn([PRODUCT_LIST,'pending']),
        data:list.getIn([PRODUCT_LIST,'data']),
        err:list.getIn([PRODUCT_LIST,'err'])
    }
}//从redux获取数据绑定到props
const  mapDispatchToProps=(dispatch)=>{
    return {
        getList(){
            dispatch({
                type:LIST,
                key:PRODUCT_LIST,
                payload:{
                    params:{name:"hdj"}
                }
            })
        },
        refresh(){
            dispatch({
                type:REFRESH,
                key:PRODUCT_LIST,
                payload:{
                    params:{name:"hdj"}
                }
            })
        }
    }
} //绑定action到props
@connect(mapStateToProps,mapDispatchToProps)
class My extends Component{
        page(){
            const {pending,data,err}=this.props;
            console.log(data);
            if (pending){
                return <div>加载中...</div>
            }else if (err){
                return <div>网络错误</div>
            } else if (data) {
                return data.map((item,index)=>{
                    return <div key={index}>{item.name}</div>
                })
            }else {
                return <div>点按钮三</div>
            }
        }
      refresh(){
           const {data,refresh}=this.props;
           if (!data){
               return
           }
           if (data.length>0){
               return <button onClick={refresh}>刷新</button>
           }
      }
      render() {
          const {getList}=this.props;
          return <div>
              {this.page()}
             <div>
                 <button onClick={getList}>加载列表</button>
                 {this.refresh()}
             </div>
          </div>
      }
}

export default My