export const mutations = {
    addShoppingCart(state,data){
        let num = 0
        for (let i in state.cart) {
            if (state.cart[i].title == data.title) {
                num++
                state.cart[i].count++
            }
        }
        if (num == 0){
            data.count = 1;
            data.checked = true
            state.cart.push(data)
        }

    },
    changeCheck(state,index){
        state.cart[index].checked = !state.cart[index].checked
    },
    update(state,che){
        for (let i in state.cart) {
            state.cart[i].checked = che
        }
    }
}