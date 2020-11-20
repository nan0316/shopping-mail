export const getters = {
    shoppingCount(state){
        let count = 0
        for (let i in state.cart) {
            count += state.cart[i].count
        }
        return count
    }
}