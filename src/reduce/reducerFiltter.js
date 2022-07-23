

export let reduce = (state, action) => {

    if (action.type === "GET_ALL_PRODUCTS") {
        return { ...state, all_products: [...action.payload], filtered_products: [...action.payload] }
    }

    if (action.type === "SET_GRID_VIWE") {
        return { ...state, gridView: true }
    }

    if (action.type === "SET_LIST_VIWE") {
        return { ...state, gridView: false }
    }

    throw new Error(`doesn't find this  ${action.type} action `)
}