import React from 'react';
import { connect } from 'react-redux';
import './index.css'
import { Modal,Input, Checkbox} from 'antd';
//引入actions
import { getDataList,changePrice,changeChecked,removeChecked } from '@/actions'

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            currentPrice:0,
            currentId:0,
            changeList:[],
        }
    }
    /**
     *发送请求页面的数据
     *
     * @memberof List
     */
    componentWillMount(){
        this.props.getDataList()
    }

    /**
     *显示该条商品对应的编辑框,设置默认商品参数
     *
     * @memberof List
     */
    showEditDialog = (id,price) => {
        this.setState({
            visible: true,
            currentPrice: price,
            currentId: id
        });
    }

    /**
     *修改商品的价格
     *
     * @memberof List
     */
    handleOk(){
        const {currentPrice,currentId} = this.state
        this.props.changePrice(currentId,currentPrice)
        this.setState({
            visible: false,
        });
    };

    /**
     *关闭弹框,设置弹框隐藏
     *
     * @memberof ProductList
     */
    handleCancel = e => {
        this.setState({
          visible: false,
        });
    };

    /**
     *监听文本框的改变
     *
     * @memberof ProductList
     */
    inputChange = e => this.setState({currentPrice:e.target.value})

    /**
     *监听复选框的变化
     *
     * @memberof List
     */
    changeCheckBox = (id,e) =>{
        this.props.changeChecked(id,e.target.checked)
    }
    /**
     *执行删除的操作
     *
     * @memberof List
     */
    deleteChecked = () =>{
        this.props.removeChecked()
    }

    render(){
        const {currentList} = this.props.product;
        return(
            <div> 
                {
                    currentList.map(item =>
                        <div className="list-content" key={item.id}>
                            <Checkbox onChange={(e) => this.changeCheckBox(item.id,e)}> </Checkbox>
                            <p> {item.id} </p>
                            <p> {item.name} </p>
                            <p> ￥{item.price} </p>
                            <p className="edit" onClick={() => this.showEditDialog(item.id,item.price)}> 编辑 </p>
                        </div>
                    )
                }
                <div onClick={this.deleteChecked} className="deleteBtn">删除所选商品</div>
                <Modal title="修改商品的价格" visible={this.state.visible} onOk={()=>this.handleOk()} onCancel={this.handleCancel}>
                    <Input value={this.state.currentPrice} onChange={this.inputChange}/>
                </Modal>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
      product: state.product
    }
}

const mapDispatchToProps = {
    getDataList,changePrice,changeChecked,removeChecked
}

export default connect(mapStatetoProps, mapDispatchToProps)(List);