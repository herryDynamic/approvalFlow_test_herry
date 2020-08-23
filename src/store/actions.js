export default {
    changeLevel({ commit }, newLevel) {
        // actions中可以编写异步代码      
        return new Promise((resolve) => {
            setTimeout(() => {
                commit('upgrade', newLevel)
                console.log('打怪升级...');
                console.log('打怪升级...');
                console.log('打怪升级...');
                resolve('升级完成了')
            }, 2000);
        })
    },
}