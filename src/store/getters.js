/* eslint-disable */
const filterAge = (state) => (term) => state.ages.filter((age) => age > term) // ES6语法  
export default { // 提供了一个对数据源进行过滤的方法   
    filterAge
} 