
/**
 * 初始化数据
 */
let obj = {
    currentList:[],//当前页的数据
    totalData: [],//请求到的全部数据
    current: 1, //当前页码
    pageSize: 10, //每页显示的条数
    total: 0,//商品列表总条数
}

export default function product(state = obj, action) {
    const {pageSize,current} = state
    switch (action.type) {
        
        case "SETDATALIST":
            const {list, total} = action
            return {
                ...state,
                totalData:list,
                total:total,
                currentList : list.slice((current-1)*pageSize,current*pageSize)
            };
        case "GETLIST":
            let result = state.totalData.filter(item => item.name.indexOf(action.name) > -1)
            let length = result.length
            result = result.slice((action.number-1)*pageSize,action.number*pageSize)
            return {
                ...state,
                currentList: result,
                total:length
            }
        case "CHANGEPRICE":
            const {id, price} = action
            const target = state.currentList
            target.some(item =>{
                if(item.id == id){
                    item.price = price
                    return true
                }
                return false
            })
            return {  
                ...state,
                currentList: target
            }
        case "CHANGECHECKED":
            const {idList,boolen} = action
            const lists = state.currentList
            lists.some(item =>{
                if(item.id == idList){
                    item.checked = boolen
                    return true
                }
                return false
            })
            return {
                ...state,
                currentList:lists,
                
            }
        case "REMOVECHECKED" :
            let delentList = state.totalData
            delentList = delentList.filter(item =>{
                return item.checked == false
            })
            return {
                ...state,
                totalData:delentList,
                currentList:delentList.slice((current-1)*pageSize,current*pageSize),
                total: delentList.length
            }
        default:
            return state;
    }
}