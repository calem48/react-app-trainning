

export let reduce = (state, action) => {

    if (action.type === "GET_ALL_PRODUCTS") {
        let maxParice = action.payload.map(p => p.price)
        maxParice = Math.max(...maxParice)
        return {
            ...state,
            all_products: [...action.payload],
            filtered_products: [...action.payload],
            filters: { ...state.filters, max_price: maxParice, price: maxParice }
        }
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

    if (action.type === "FILTER_UPDATE") {
        let { value, name } = action.data
        return { ...state, filters: { ...state.filters, [name]: value } }
    }

    if (action.type === "FILTER_PRODUCTS") {
        let tempProdcuts = [...state.all_products]
        let { category, company, colors, shipping, text, price } = state.filters

        if (text) {
            tempProdcuts = tempProdcuts.filter(item => {
                return item.name.toLowerCase().includes(text.toLowerCase())
            })
        }

        if (category !== "all") {
            tempProdcuts = tempProdcuts.filter(item => {
                return item.category === category
            })
        }

        if (company !== "all") {
            tempProdcuts = tempProdcuts.filter(item => {
                return item.company === company
            })
        }



        tempProdcuts = tempProdcuts.filter(item => {
            return item.price <= price
        })



        if (colors !== "all") {

            tempProdcuts = tempProdcuts.filter(item => {
                return item.colors.find(c => c === colors)
            })

        }

        return { ...state, filtered_products: tempProdcuts }
    }
    throw new Error(`doesn't find this  ${action.type} action `)
}