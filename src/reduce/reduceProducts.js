

export let reduce = (state, action) => {

    if (action.type === "OPEN_SIDE_BARE") {
        return { ...state, isSidebarOpen: true }
    }

    if (action.type === "CLOSE_SIDE_BARE") {
        return { ...state, isSidebarOpen: false }
    }

    if (action.type === "GET_PRODUCTS_BEGIN") {

        return { ...state, isLoading: true }
    }



    if (action.type === "GET_PRODUCTS_SUCCESS") {

        let featruedProducts = action.data.filter(product => {
            return product.featured === true
        })

        return { ...state, products: action.data, Featrued_Products: featruedProducts, isLoading: false }
    }

    if (action.type === "GET_PRODUCTS_ERROR") {
        return { ...state, isLoading: false, Error_Products: true }
    }

    if (action.type === "GET_SINGLE_PRODUCT_BEING") {
        return { ...state, single_product_loading: true }
    }

    if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
        return { ...state, single_product_loading: false, single_product: action.data }
    }

    if (action.type === "GET_SINGLE_PRODUCT_ERROR") {
        return { ...state, single_product_error: true, single_product_loading: false }
    }


    throw new Error(`doesn't find this  ${action.type} action `)
}