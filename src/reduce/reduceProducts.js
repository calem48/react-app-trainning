export let reduce = (state, action) => {

    if (action.type === "OPEN_SIDE_BARE") {
        return { ...state, isSidebarOpen: true }
    }

    if (action.type === "CLOSE_SIDE_BARE") {
        return { ...state, isSidebarOpen: false }

    }


    if (action.type === "GET_PRODUCTS_BEGIN") {
        console.log(action);
        return { ...state, products: action.data, isLoading: false }
    }

    return state
    throw new Error(`not much ${action.type} `)
}