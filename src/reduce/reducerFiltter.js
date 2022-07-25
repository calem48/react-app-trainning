

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

    if (action.type === "SORT_UPDATE") {
        return { ...state, sort: action.value }
    }

    if (action.type === "SORT_PRODUCTS") {
        let tempProductSort = [...state.filtered_products]

        if (state.sort === "price-lowest") {
            tempProductSort = state.filtered_products.sort((a, b) => (a.price) - (b.price))
        }

        if (state.sort === "price-highest") {
            tempProductSort = state.filtered_products.sort((a, b) => (b.price) - (a.price))
        }

        if (state.sort === "name-a") {
            tempProductSort = state.filtered_products.sort((a, b) => {
                return a.name > b.name ? 1 : -1
            })
        }

        if (state.sort === "name-z") {
            tempProductSort = state.filtered_products.sort((a, b) => {
                return a.name < b.name ? 1 : -1
            })
        }

        return { ...state, filtered_products: tempProductSort }

    }

    throw new Error(`doesn't find this  ${action.type} action `)
}