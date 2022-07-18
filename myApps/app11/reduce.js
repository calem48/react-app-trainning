let reducer = (state, action) => {
    if (action.type === "CLEAR_ITEMS") {
        return { ...state, items: [] }
    }

    if (action.type === "REMOVE-ITEM") {
        let newItems = state.items.filter(item => item.id !== action.id)
        return { ...state, items: newItems }
    }

    if (action.type === "INCRESE") {
        let updateAmount = state.items.map(item => {
            if (item.id === action.id) {
                return { ...item, amount: item.amount + 1 }
            }
            return item
        })
        return { ...state, items: updateAmount }
    }

    if (action.type === "DESCRESE") {
        let updateAmount = state.items.map(item => {
            if (item.id === action.id) {
                return { ...item, amount: item.amount - 1 }
            }
            return item
        }).filter(item => item.amount !== 0)
        return { ...state, items: updateAmount }
    }

    if (action.type === "GET_TOTAL") {

        let { totale, amount } = state.items.reduce((acc, next) => {

            acc.totale += next.amount * next.price
            acc.amount += next.amount
            return acc

        }, { totale: 0, amount: 0 })


        totale = parseFloat(totale.toFixed(2))
        return { ...state, totale, amount }
    }

    if (action.type === "LOADING") {
        return { ...state, loading: true }
    }
    if (action.type === "DISPLAY-ITEMS") {
        return { ...state, items: action.data, loading: false }
    }

    return state
}

export default reducer