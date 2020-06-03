import axios from 'axios';
import ExportTypography from 'antd/lib/typography/Typography';

const SET_DATA_LIST = "SETDATALIST"
const GET_LIST = "GETLIST"
const CHANGE_PRICE = "CHANGEPRICE"
const CHANGE_CHECKED = "CHANGECHECKED"
const REMOVE_CHECKED = "REMOVECHECKED"

/**
 *设置数据列表
 *
 * @export
 * @param {*} list
 * @param {*} total
 * @returns
 */
export function setDataList(list,total){
    return{
        type: SET_DATA_LIST,
        list,
        total
    }
}
/**
 *请求数据列表
 *
 * @export
 * @returns
 */
export function getDataList() {
    return (dispatch,getState) =>{
        let result = axios.get('productList.json')
        result.then(res => {
            const {data} = res
            const {pageSize,current} = getState().product
            dispatch(setDataList(data,data.length))
        })
    }
}
/**
 *根据页码和商品名称获取符合条件的商品列表
 *
 * @export
 * @param {number} [number=1]
 * @param {string} [name=""]
 * @returns
 */
export function getList(number=1,name=""){
    return{
        type: GET_LIST,
        number,
        name
    }
}
/**
 *改变商品的价格
 *
 * @export
 * @param {*} id
 * @param {*} boolen
 * @returns
 */
export function changePrice(id,boolen){
    return {
        type:CHANGE_PRICE,
        idList:id,
        boolen
    }
}
/**
 *改变复选框的状态
 *
 * @export
 * @param {*} id
 * @param {*} boolen
 * @returns
 */
export function changeChecked(id,boolen){
    return {
        type: CHANGE_CHECKED,
        idList:id,
        boolen
    }
}
/**
 *删除所选中的商品
 *
 * @export
 * @returns
 */
export function removeChecked(){
    return {
        type: REMOVE_CHECKED
    }
}