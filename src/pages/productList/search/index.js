import React from 'react';
import { Input } from 'antd';
import './index.css'
import { connect } from 'react-redux';
//引入actions
import { getList } from '@/actions'
const { Search } = Input;

class SearchProduct extends React.Component{
    constructor(props){
        super(props);
    }
    /**
     *根据商品名称进行搜索
     *
     * @memberof SearchProduct
     */
    searchResult = (value) =>{
        const {getList , product} = this.props
        getList(product.current,value)
    }

    render(){
        return(
            <Search placeholder="请输入要查询的名字" onSearch={this.searchResult} enterButton />
        )
    }
}

const mapStatetoProps = state => {
    return {
      product: state.product
    }
}

const mapDispatchToProps = {
    getList
}

export default connect(mapStatetoProps, mapDispatchToProps)(SearchProduct);