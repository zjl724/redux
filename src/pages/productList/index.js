import React from 'react';
import SearchProduct from "./search";
import PageNumber from "./pageNumber";
import List from './list'

class ProductList extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
      return(
          <div>
              {/*搜索 */}
              <SearchProduct></SearchProduct>
              {/*列表 */}
              <List></List>
              {/*分页 */}
              <PageNumber></PageNumber>
              {/*修改商品价格的弹框 */}
          </div>
      )
    }
}

export default ProductList;
