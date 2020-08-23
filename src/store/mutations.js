const upgrade = (state, newLevel) => {
    state.defaultLevel = newLevel
}
const upSalary = (state, newSalary) => {
    state.salary = newSalary
}
export default { // 提供了2个修改数据源的方法   
    upgrade, upSalary
}