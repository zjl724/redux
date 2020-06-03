import React from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
//引入actions
import { getList } from '@/actions'

class PageNumber extends React.Component{
    constructor(props){
        super(props);
    }

    /**
     *监听页码的变化,页面改变时,重新获取数据
     *
     * @memberof PageNumber
     */
    onPageNumberChange = (page) =>{
        this.props.getList(page)
    }

    render(){
        const {total,current} = this.props.product;
        return(
            <Pagination defaultCurrent={current} total={total} onChange={this.onPageNumberChange}/>
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

export default connect(mapStatetoProps, mapDispatchToProps)(PageNumber);